import React, { Component } from "react";
import { VictoryLabel, VictoryPie, VictoryTooltip } from "victory";
import Services from "../../../services/currency.services";

class DataBubble extends Component {
  constructor() {
    super();
    this.state = { latestExchange: null };
    this.services = new Services();
  }

  componentDidMount() {
    this.services
      .getLatestCurrency()
      .then(response => this.setState({ latestExchange: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.latestExchange) {
      return (
        <svg viewBox="0 0 400 400">
          <VictoryPie 

            labelComponent={
              <VictoryTooltip 
              cornerRadius={0}
              flyoutStyle={{fill: "white", size: "20"}}
              pointerLength={0}


              />}   
          
            colorScale={["#BFBFBF", "#8C8C8C", "#404040" ]}
            standalone={false}
            width={400}
            height={400}
            padAngle={3}
            
            
              data={[
              { x: `EUR ${this.state.latestExchange.rates.EUR.toFixed(3)}`, y: this.state.latestExchange.rates.EUR },

              { x: `USD ${this.state.latestExchange.rates.USD.toFixed(3)}`, y: this.state.latestExchange.rates.USD },

              { x: `CNY ${this.state.latestExchange.rates.CNY.toFixed(3)}`, y: this.state.latestExchange.rates.CNY },

              { x: `CHF ${this.state.latestExchange.rates.CHF.toFixed(3)}`, y: this.state.latestExchange.rates.CHF },

              { x: `AUD ${this.state.latestExchange.rates.AUD.toFixed(3)}`, y: this.state.latestExchange.rates.AUD }
            ]}

            innerRadius={100}
            labelRadius={111}
            
            style={{
              
              labels: {
                fontSize: 10, fill: "#0d0d0d", fontFamily: "Lexend Deca"
                
              }
            }}

            events={[{
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => ({style: {fill: "#F24535", size: 30}})
                    }, {
                      target: "labels",
                      mutation: () => ({ active: true })
                    }
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {}
                    }, {
                      target: "labels",
                      mutation: () => ({ active: false })
                    }
                  ];
                }
              }
            }]}

              />

          />
        
        />

          <VictoryLabel textAnchor="middle" style={{ fontSize: 60, fill: "#0d0d0d", fontFamily: "Lexend Deca" }} x={200} y={200} text="GBP" />
        </svg>
      );
    } else {
      return <p>Processing</p>;
    }
  }
}

export default DataBubble;

// class DataBubble extends Component {
//     constructor() {
//         super()
//         this.state = { latestExchange: null }
//         this.services = new Services()
//     }

//     componentDidMount() {
//         this.services.getLatestCurrency()
//             .then(response => this.setState({ latestExchange: response.data }))
//             .catch(err => console.log(err))
//     }

//     render() {
//         if (this.state.latestExchange) {

//             return (
//                 <>
//                     <div className="container">
//                         <div className="row justify-content-center card">
//                             <h1>{this.state.latestExchange.rates.GBP}</h1>
//                         </div>
//                     </div>
//                 </>
//             )
//         } else {
//             return (

//                 <p>Processing</p>
//             )
//         }
//     }
// }
// export default DataBubble

// // { this.state.apuesta && this.state.apuesta.map((apuesta, idx) => <ApuestaCard key={idx} {...apuesta} />) }
