import React, { Component } from "react";

export default class Quotes extends Component {
  render() {
    return (
      <div className="container">
        <div className="mt-4" style={{ textAlign: "center", fontSize: "180%" }}>
          "You will either step forward into growth, or you will step backward
          into safety"
        </div>
        <div className="d-flex justify-content-end" style={{fontSize:"130%"}}>-Abraham Maslow</div>
      </div>
    );
  }
}
