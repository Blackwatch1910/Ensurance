import React from "react";
import Score from "react-score-indicator";

import "./Graph.css";

const Box = {
    width: '200px',
    margin: '0 auto',
    backgroundColor: '#121234'
}

class Graph extends React.PureComponent {
  state = {
    value: 5
  };

  add = () => {
    this.setState({ value: (this.state.value + 1) % 101 });
  };

  render() {
    return (
      <div className="App">
        <h1>Range Indicator</h1>
        <div style={Box}>
          <Score
            value={this.state.value}
            maxValue={100}
            borderWidth={30}
            gap={5}
            maxAngle={260}
            rotation={90}
            colors={[
              "#d12000",
              "#ed8d00",
              "#f1bc00",
              "#84c42b",
              "#53b83a",
              "#3da940",
              "#3da940",
              "#3da940"
            ]}
          />
        </div>
        <button className="btn" onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default Graph