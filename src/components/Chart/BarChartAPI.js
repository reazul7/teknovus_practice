import axios from "axios";
import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";s

const DynamicChart = () => {
  const [chartData, setChartData] = useState({});

  const Chart = () => {
    let xValues = [];
    let confirmed = [];
    let deaths = [];

    axios
      .get("https://demo-live-data.highcharts.com/time-rows.json")
    //   .get("https://covid2019-api.herokuapp.com/v2/current")
      .then((res) => {
        for (const dataObj of res.data.data.slice(0, 15)) {
         xValues.push(dataObj.location);
          confirmed.push(dataObj.confirmed);
          deaths.push(dataObj.deaths);
        }
        
        setChartData({
          labels: xValues,
          datasets: [
            {
              label: "confirmed COVID cases",
              data: confirmed,
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1
            },
            {
              label: "deaths",
              data: deaths,
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(54, 162, 235, 0.2)"],
              borderWidth: 1
            }
          ]
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Chart();
  }, []);

  return (
    <div className="App">
      <h1>Bar Chart</h1>
      <div>
        {/* <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        /> */}
      </div>
    </div>
  );
};
export default DynamicChart;
