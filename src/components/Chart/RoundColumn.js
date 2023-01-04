import React from 'react';
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

HighchartsMore(Highcharts);


const options = {
    chart: {
      polar: true,
      inverted: true,
      marginTop: 50
    },
    title: {
      text: "Browser uses Chart",
      subtext: "using round column",
    },
    tooltip: {
      outside: true
    },
    pane: {
      size: "100%",
      innerSize: "55%",
      endAngle: 360
    },
    xAxis: {
      tickInterval: 3,
      gridLineColor: "#ffffff",
      labels: {
        align: "right",
        enabled: false,
        useHTML: true,
        allowOverlap: true,
        step: 1,
        y: 3,
        style: {
          fontSize: "13px"
        }
      },
      lineWidth: 0
      //categories: ["Norway", "United States"]
    },
    yAxis: {
      crosshair: {
        //Indicador que cruza c/dato
        enabled: false,
        color: "#ffffff"
      },
      lineWidth: 0,
      tickInterval: 25,
      reversedStacks: false,
      endOnTick: false,
      showLastLabel: false,
      gridLineColor: "#ffffff",
      labels: {
        enabled: false
      }
    },
    plotOptions: {
      column: {
        stacking: "normal",
        borderWidth: 1,
        pointPadding: 0,
        groupPadding: 0.09 //espacio entre grupo de columnas
      },
      pie: {
        dataLabels: {
          enabled: true,
          distance: 5,
          y: 55,
          //format: "{y}",
          format: "<b>{point.name}</b><br>{y}",
          style: {
            fontWeight: "bold",
            color: "black",
            fontSize: "20px"
          },
          filter: {
            property: "name",
            operator: "===",
            value: "Firefox"
          }
        }
      }
    },
    series: [
      {
        type: "column",
        //name: "",
        showInLegend: false,
        data: [
          {
            name: "Chrome",
            y: 132,
            color: "#dbc8e4"
          },
          {
            name: "Firefox",
            y: 105,
            color: "#a8e6eb"
          }
        ]
      },
      {
        type: "column",
        //name: "Silver medals",
        showInLegend: false,
        data: [
          {
            name: "Safari",
            y: 102,
            color: "#b792c9"
          },
          {
            name: "Edge",
            y: 90,
            color: "#8fdee7"
          }
        ]
      },
      {
        type: "column",
        //name: "Bronze medals",
        showInLegend: false,
        data: [
          {
            name: "Edge",
            y: 174,
            color: "#a577bc"
          },
          {
            name: "Safari",
            y: 111,
            color: "#55d0db"
          }
        ]
      },
      {
        type: "column",
        //name: "Silver medals",
        showInLegend: false,
        data: [
          {
            name: "Chrome",
            y: 157,
            color: "#935bae"
          },
          {
            name: "Internet Explorer",
            y: 64,
            color: "#26adb8"
          }
        ]
      },
      {
        type: "column",
        //name: "Silver medals",
        showInLegend: false,
        data: [
          {
            name: "Internet Explorer",
            y: 192,
            color: "#6f378a"
          },
          {
            name: "Opera",
            y: 130,
            color: "#228f99"
          }
        ]
      }
    ]
  };


const RoundColumn = () => {
    return (
        <div>
            <h1>From Round-Chart page :)</h1>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default RoundColumn;