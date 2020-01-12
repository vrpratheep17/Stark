import React, { Component, link } from "react";
import logo from "../assets/Images/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a class="navbar-brand" href="index.html">
            <img src={logo} alt="" width="30px" class="rounded-circle"></img>
            <p class="d-inline font-weight-bold text-font">Amaresh Stark</p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active text-font">
                - Take your first step towards growth with us
              </li>
              <li class="nav-item"></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
