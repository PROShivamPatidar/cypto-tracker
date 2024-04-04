import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import SelectCoin from "../components/compare/selectcoins";
import SelectDays from "../components/coin/selectDays";
import { getCoinData } from "../function/getCoinsData";
import { coinObject } from "../function/coinObject";
import { settingChartData } from "../function/settingChartData";
import { getCoinPrice } from "../function/getCoinPrice";
import Loader from "../components/common/loader";
import List from "../components/dashboad/list";
import CoinInfo from "../components/coin/coinInfo";
import LineChart from "../components/coin/linechart";
import TogglePriceType from "../components/coin/pricetype";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");

  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});

  const [isloading, setIsloading] = useState(true);
  const [days, setDays] = useState(7);
  const [priceType, setPriceType] = useState("prices");

  const [chartData, setChartData] = useState({});

  async function handleDaysChange(event) {
    setIsloading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrice(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrice(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setIsloading(false);
  }

  const handlePriceTypeChange = async (event, newType) => {
    setIsloading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrice(crypto1, days, newType);
    const prices2 = await getCoinPrice(crypto2, days, newType);
      settingChartData(setChartData, prices1,prices2);
      setIsloading(false);
    
  };


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsloading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }
    if (data1 && data2) {
      const prices1 = await getCoinPrice(crypto1, days, priceType);
      const prices2 = await getCoinPrice(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2);
        console.log("both pricess", prices1, prices2);
        setIsloading(false);
      }
    }
  }

  const handleCoinChange = async (event, isCoin) => {
    setIsloading(true);
    if (isCoin) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrice(crypto1, days, priceType);
      const prices2 = await getCoinPrice(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        setIsloading(false);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
  };

  return (
    <div>
      <Header />
      {isloading ? (
        <Loader />
      ) : (
        <>
          <div className="coins-days-flex">
            <SelectCoin
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto2Data} />
          </div>

          <div className="grey-wrapper">
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>

          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
}
export default ComparePage;
