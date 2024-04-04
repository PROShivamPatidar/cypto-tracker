import axios from "axios";

export const getCoinPrice = (id, days,priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&precision=daily`
    ).then((response) => {
      console.log("hello price",response.data.prices);
      return response.data[priceType];
    })
    .catch((error) => {
      console.log("error>>>>", error);
    });
  return prices;
};
