import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
    title: {
        text: "Chart",
    },
    subtitle: { text: "sub" },
    series: [
        {
            data: [
                [1, "css"],
                [1, "React"],
                [3, "figma"],
                [0.5, "notepad"],
            ],
            keys: ["y", "name"],
            type: "pie",
        },
    ],
};

const PieChart = () => {
    return (
        <div>
            <h1>From PieChart page</h1>
            <HighchartsReact options={chartOptions} highcharts={Highcharts} />
        </div>
    );
};

export default PieChart;
