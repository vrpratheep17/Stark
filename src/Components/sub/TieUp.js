import React, { Component } from "react";
import TiedUp from "../assets/Images/tiedup.png";
import Ti from "../assets/Images/showcasebg.jpg";
export default class TieUp extends Component {
  render() {
    return (
      <div>
        <div
          className="text-font"
          style={{ textAlign: "center", fontSize: "250%", fontWeight: "bold" }}
        >
          TIED UP COMPANIES
        </div>
        <img src={TiedUp} style={{ height: "100%", width: "100%" }} />
      </div>
    );
  }
}
