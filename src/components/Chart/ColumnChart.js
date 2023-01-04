import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart = () => {
  const chartOptions = {
    title: {
      text: "Monthwise Score",
    },
    chart: {
      type: "column",
      events: {
        load() {
          this.showLoading();
          setTimeout(this.hideLoading.bind(this), 2000);
        },
      },
    },

    yAxis: {
      title: {
        text: "Score",
      },
    },

    xAxis: {
      title: {
        text: "Months",
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    plotOptions: {
      series: {
        marker: {
          symbol: "circle",
        },
        type: "column",
      },
    },
    series: [
      {
        name: "Per Month Score",
        data: [10, 22, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      },
      {
        name: "Per Month Score",
        data: [43, 33, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      },
      {
        name: "Per Month Score",
        data: [333, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      },
    ],
  };

  return (
    <div>
      <h1>Hello from column chart page </h1>
      <HighchartsReact options={chartOptions} highcharts={Highcharts} />
    </div>
  );
};

export default ColumnChart;
