import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.js";
import HighchartsReact from "highcharts-react-official";
import {
  Card,
  CardHeader,
  CardBody
} from "mdbreact";

const ReactHighcharts = require("react-highcharts");
const config = {
  /* HighchartsConfig */

  title: {
    text: "HighChart Demo",
    style: {
      color: "red",
      fontSize: "23px",
      fontWeight: "bold",
      fontStyle: "italic",
    },
  },

  xAxis: {
    tickLength: 50,
    categories: ["jan", "feb", "mar", "apr"],
    labels: {
      style: {
        color: "black",
        fontSize: "13px"
      },
      formatter: function() {
        return (
          '<span style="margin-right: 9px">' +
          this.chart.series[0].options.stack +
          "</span><span>" +
          this.chart.series[1].options.stack +
          '</span><br /><div style="text-align:center"> <br />' +
          this.value +
          "</div> "
        );
      },
      useHTML: true
    }
  },

  yAxis: [
    {
      //--- Primary yAxis
      title: {
        text: "Bugs, Questions And Enhancements"
      }
    },
    {
      //--- Secondary yAxis
      title: {
        text: "Total Open"
      },
      opposite: true
    }
  ],

  tooltip: {
    formatter: function() {
      return (
        "<b>" +
        this.x +
        "</b><br/>" +
        this.series.name +
        ": " +
        this.y +
        "<br/>" +
        "Total: " +
        this.point.stackTotal
      );
    }
  },
  plotOptions: {
    column: {
      stacking: "normal",
      allowPointSelect: false
    }
  },
  legend: {
    events: {
      legendItemClick: function() {
        return false;
        // <== returning false will cancel the default action
      }
    },
    itemStyle: {
      fontSize: "17px"
    }
  },
  credits: {
    enabled: false
  },
  series: [
    {
      yAxis: 0,
      type: "column",
      name: "bug",
      data: [5, 3, 4, 7],
      color: "#1E90FF",
      stack: "Open"
    },
    {
      yAxis: 0,
      type: "column",
      name: "bug",
      color: "#1E90FF",
      data: [1, 4, 4, 0],
      showInLegend: false,
      stack: "Closed"
    },
    {
      yAxis: 0,
      type: "column",
      name: "question",
      color: "#DC143C",
      data: [5, 3, 4, 7],
      stack: "Open"
    },
    {
      yAxis: 0,
      type: "column",
      name: "question",
      color: "#DC143C",
      data: [3, 4, 4, 0],
      showInLegend: false,
      stack: "Closed"
    },
    {
      yAxis: 0,
      type: "column",
      name: "enhancement",
      color: "#32CD32",
      data: [5, 3, 4, 7],
      stack: "Open"
    },
    {
      yAxis: 0,
      type: "column",
      name: "enhancement",
      color: "#32CD32",
      data: [3, 4, 4, 0],
      showInLegend: false,
      stack: "Closed"
    },
    {
      yAxis: 1,
      type: "line",
      name: "Total Open",
      color: "#2C2727",
      data: [3, 7, 3, 25],
      lineWidth: 4.5,
      marker: {
        enabled: false
      }
    }
  ]
};

const MultiColumnChart = () => {
    return (
        <div>
            <h1>Hello from multi-column-chart page</h1>
        </div>
    );
};

export default MultiColumnChart;