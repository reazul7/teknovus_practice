import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const Barchart = () => {

  const [stockChartXValues, setStockChartXValues] = useState('');
  const [stockChartYValues, setStockChartYValues] = useState('');

  useEffect(() => {
      fetchStock();
  }, [])

  function fetchStock() {
      let API_Call = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo'
      // let StockChartXValuesFunction = []
      // let StockChartYValuesFunction = []

      fetch(API_Call)
          .then(
              function (response) {
                  return response.json();
              }
          )
          .then(
              function (data) {

                  // for (var key in data[`Time Series (Daily)`]) {
                  //     StockChartXValuesFunction.push(key);
                  //     StockChartYValuesFunction.push(parseFloat((Math.round(data[`Time Series (Daily)`][key][`2. high`] * 100) / 100).toFixed(2)));
                  // }
                  // setStockChartYValues(StockChartYValuesFunction);
                  // setStockChartXValues(StockChartXValuesFunction);
                  console.log(data, 'data');
            

              }
          )
  }

  const options = {

      title: {
          text: 'My stock chart'
      },
      xAxis: {
          type: 'datetime',
          labels: {
              format: '{value:%b-%e}'
          },
      },

      series: [{
          data: stockChartYValues,
          pointStart: Date.UTC(stockChartYValues[99]),
          pointInterval: 24 * 3600 * 1000

      }]
  };

  return (
      <div>
          <h1>BarChart 2</h1>
          <HighchartsReact highcharts={Highcharts} options={options} constructorType={'stockChart'}/>
      </div>
  )
}
export default Barchart;