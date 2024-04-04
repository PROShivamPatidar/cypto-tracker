import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/header";
import Loader from "../components/common/loader";
import { coinObject } from "../function/coinObject";
import List from "../components/dashboad/list";
import CoinInfo from "../components/coin/coinInfo";
import { getCoinData } from "../function/getCoinsData";
import { getCoinPrice } from "../function/getCoinPrice";
import LineChart from "../components/coin/linechart";
// import { convertDate } from "../function/convertDate";
import SelectDays from "../components/coin/selectDays";
import { settingChartData } from "../function/settingChartData";
// import PriceType from "../components/coin/pricetype";
import TogglePriceType from "../components/coin/pricetype";

function CoinPage() {
  const [isloading, setIsloading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);

    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrice(id, days, priceType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsloading(false);
      }
    }
  }

  // const [days, setDays] = useState(7);

  const handleDaysChange = async (event) => {
    setIsloading(true);
    setDays(event.target.value);

    const prices = await getCoinPrice(id, event.target.value, priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsloading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsloading(true);
    setPriceType(newType);
    const prices = await getCoinPrice(id, days, newType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsloading(false);
    }
  };

  return (
    <div>
      <Header />
      {isloading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}
export default CoinPage;
