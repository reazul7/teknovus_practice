import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export class ChartUsingRestAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        yAxis: {
          title: {
            text: "Range"
          }
        },
        xAxis: {
          title: {
            text: "Time"
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
  }

  componentDidMount() {
    this.loadData();
  }

//   updateName(event) {
//     this.setState({ name: event.target.value });
//   }

  loadData() {
    // event && event.preventDefault();

    fetch('https://demo-live-data.highcharts.com/time-rows.json')
      .then((res) => res.json())
      .then((res) => this.parseData(res));
  }

  parseData(rawData) {
    let categories = [];
    let data = [];
   
    let newTimes = "";
    
    for (let index = 0; index < rawData.length; index++) {
         let times = rawData[index]
        //  let valus = rawData[index]
        //  console.log(fruitName,fruitQuantity,'allfruits');
        // console.log(data[index[0]],data[index[1]], 'valuuuuus')

        // for (let fruitIndex =0; fruitIndex<fruitName.length; fruitIndex++){
        //     let secondFruitName = fruitName[fruitIndex]
        //     console.log(secondFruitName, 'secondFruitName');
        // }
        
        newTimes = times[0];
        let NewValues = times[1];

        
    }
    

    // rawData.forEach(element => {
    //     categories.push(element[0]);
    //     data.
    //     // console.log(element)
    //     element.forEach(elementValue => {
    //         console.log(elementValue, 'elementVlue');
            
    //     })
    // })

    // rawData.forEach(() => {
    //   categories.push([3]);
    //   data.push([10]);
    //   console.log(rawData, 'rawData');
    // });

    this.setState({
      options: {
        // title: {
        //   text: `Predicted nationality from a name`
        // },
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
        <HighchartsReact highcharts={Highcharts} options={this.state.options} />
      </>
    );
  }
}

export default (ChartUsingRestAPI);
