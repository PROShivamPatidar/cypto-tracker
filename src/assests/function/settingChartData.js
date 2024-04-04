import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label:prices1,
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID:'crypto1',
        },
        {
          label:prices2,
          data: prices2.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID:'crypto2',
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label:prices1,
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 1,
          fill: true,
          tension: 0.25,
          backgroundColor: prices1 ? "transparent" : "rgba(58,128,233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID:'crypto1',
        },
      ],
    });
  }
};
