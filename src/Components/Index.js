import React, { Component } from "react";
import Showcase from "./sub/Showcase";
import Description from "./sub/Description";
import Quotes from "./sub/Quotes";
import Owner from "./sub/Owner";
import TieUp from "./sub/TieUp";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Showcase />

        <Quotes />
        <Description />
        <Owner />
        <TieUp />
      </div>
    );
  }
}
