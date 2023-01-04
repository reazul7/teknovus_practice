import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Barchart = () => {
    const chartOptions = {
        chart: {
            type: "column",
            animation: Highcharts.svg,
            marginRight: 10,
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(() => {
                        //GET request
                        fetch("https://demo-live-data.highcharts.com/time-rows.json")
                            .then((response) => response.json())
                            .then((data) => {
                                const point = [new Date(data[0][0]).getTime(), data[0][1]];
                                // series.adsdPoint(point);
                            });
                    }, 1000);
                },
            },
        },
        xAxis: {
            type: "datetime",
            tickPixelInterval: 150,
            maxZoom: 20 * 1000,
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: "Value",
                margin: 80,
            },
        },
        series: [
            {
                name: "Random data",
                data: [],
            },
        ],
    };

    return (
        <div>
            <h1>Spline chart || Live Update Chart</h1>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};

export default Barchart;
