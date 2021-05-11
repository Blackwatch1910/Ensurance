// import { response } from "express";
import React from "react";
import Score from "react-score-indicator";

import "./Graph.css";

const Box = {
  width: "200px",
  margin: "0 auto",
  backgroundColor: "#121234",
};

class Graph extends React.Component {
  constructor() {
    super();

    this.state = {
      cscore: 0,
      hscore: 0,
      users: [],
    };
  }

  fetchUsers() {
    const axios = require("axios");
    axios
      .get(
        "https://ensurance-28be7-default-rtdb.firebaseio.com/userdetails.json"
      )
      .then((response) => {
        this.state.users.push(response.data);

        console.log(response.data);

        console.log("response", response);

        //console.log("data", this.state.users)

        console.log("State", this.state.users[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateScore = (len, drowsiness, challan, unknown) => {
    this.setState ({
      hscore: (len / 8) * 100,
      cscore: (20 - (drowsiness + challan + unknown/10))/20
    });
  }

  render() {
    return (
      <div className="App">
        <div className="indicator-container">
          <h1>Civil Score Indicator</h1>
          <div style={Box}>
            <Score
              value={this.state.cscore}
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
                "#3da940",
              ]}
            />
          </div>
          <h1>Health Score Indicator</h1>
          <div style={Box}>
            <Score
              value={this.state.hscore}
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
                "#3da940",
              ]}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Civil Score</th>
              <th>Reports</th>
              <th>UserID</th>
            </tr>
          </thead>
          {this.state.users.map((item) => (
            <tbody>
              <tr>
                <td>{console.log("Item", item)}</td>
                <td>item.reports</td>
                <td>item.userid</td>
              </tr>
            </tbody>
          ))}
        </table>

        <button className="btn" onClick={this.updateScore.bind(this)}>
          Calculate Score
        </button>
        <button className="btn" onClick={this.fetchUsers.bind(this)}>
          Show Data
        </button>
      </div>
    );
  }
}

export default Graph;
