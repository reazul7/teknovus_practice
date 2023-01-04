import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export class ChartUsingRestAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "White",
      options: {
        yAxis: {
          title: {
            text: "Probability"
          }
        },
        xAxis: {
          title: {
            text: "Country"
          }
        },
        series: [
          {
            name: "Probability per country",
            type: "column",
            dataLabels: {
              enabled: true
            }
          }
        ]
      }
    };

    this.updateName = this.updateName.bind(this);
    this.loadData = this.loadData.bind(this);
    this.parseData = this.parseData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  loadData(event) {
    event && event.preventDefault();

    const name = this.state.name;
    fetch(`https://api.nationalize.io/?name=${name}`)
      .then((res) => res.json())
      .then((res) => this.parseData(res));
  }

  parseData(rawData) {
    let categories = [];
    let data = [];

    rawData.country.forEach((country) => {
      categories.push(country.country_id);
      data.push(country.probability);
    });

    this.setState({
      options: {
        title: {
          text: `Predicted nationality from a name ${this.state.name}`
        },
        xAxis: {
          categories: categories
        },
        series: {
          data: data
        }
      }
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.loadData}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateName}
          />
          <button type="submit">Search</button>
        </form>
        <HighchartsReact highcharts={Highcharts} options={this.state.options} />
      </>
    );
  }
}

export default (ChartUsingRestAPI);
