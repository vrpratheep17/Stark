import React, { Component } from "react";
import Pratheep from "../assets/Images/pratheep.jfif";
import Amar from "../assets/Images/amar.jfif";

export default class Owner extends Component {
  render() {
    return (
      <div class="container mt-5">
        <div
          className="text-font"
          style={{
            textAlign: "center",
            fontSize: "250%",
            fontWeight: "bold"
          }}
        >
          PEOPLE
        </div>
        <div class="row">
          <div class="col-sm-4 my-3">
            <div class="card card-flip h-100">
              <div
                class="card-front text-white "
                style={{ backgroundColor: "#802BB1" }}
              >
                <div class="card-body ">
                  <img
                    class="rounded-circle float-right"
                    src={Amar}
                    style={{ width: "100px" }}
                  ></img>
                  <h3 class="card-title text-font font-weight-bold">Amaresh</h3>
                  <p class="card-text text-font">Head of sales and marketing</p>
                  <p class="card-text text-font">
                    2+ years industry experiance
                  </p>
                </div>
              </div>
              <div class="card-back text-light p-2">
                <div class="card-body bg-primary">
                  <h3 class="card-title text-font font-weight-bold">About</h3>
                  <p class="card-text text-font">
                    BTech in Hindustan university
                  </p>
                  <p class="card-text text-font">
                    Pursueing MBA in manipal university
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 my-3">
            <div class="card card-flip h-100">
              <div
                class="card-front text-white"
                style={{ backgroundColor: "#2D283E" }}
              >
                <div class="card-body">
                  <img
                    class="rounded-circle float-right"
                    src={Pratheep}
                    style={{ width: "100px" }}
                  ></img>
                  <h3 class="card-title text-font font-weight-bold">
                    Pratheep
                  </h3>
                  <p class="card-text text-font">Software specialist</p>
                  <p class="card-text text-font">
                    2+ years experiance in Software industry
                  </p>
                </div>
              </div>
              <div class="card-back p-2 text-white">
                <div class="card-body bg-dark">
                  <h3 class="card-title text-font font-weight-bold">About</h3>
                  <p class="card-text text-font">
                    BE in KCG college of Technology
                  </p>
                  <p class="card-text text-font">Software Engineer in Nokia</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 my-3">
            <div class="card card-flip h-100">
              <div
                class="card-front text-white "
                style={{ backgroundColor: "#802BB1" }}
              >
                <div class="card-body">
                  <img
                    class="rounded-circle float-right"
                    src={Amar}
                    style={{ width: "100px" }}
                  ></img>
                  <h3 class="card-title text-font font-weight-bold">Amaresh</h3>
                  <p class="card-text text-font">Head of sales and marketing</p>
                  <p class="card-text text-font">
                    2+ years industry experiance
                  </p>
                </div>
              </div>
              <div class="card-back bg-white p-2">
                <div class="card-body bg-primary text-light">
                  <h3 class="card-title text-font font-weight-bold">About</h3>
                  <p class="card-text text-font">
                    BTech in Hindustan university
                  </p>
                  <p class="card-text text-font">
                    Pursueing MBA in manipal university
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4 my-3">
            <div class="card card-flip h-100">
              <div
                class="card-front text-white"
                style={{ backgroundColor: "#2D283E" }}
              >
                <div class="card-body">
                  <img
                    class="rounded-circle float-right"
                    src={Pratheep}
                    style={{ width: "100px" }}
                  ></img>
                  <h3 class="card-title text-font font-weight-bold">
                    Pratheep
                  </h3>
                  <p class="card-text text-font">Software specialist</p>
                  <p class="card-text text-font">
                    2+ years experiance in Software industry
                  </p>
                </div>
              </div>
              <div class="card-back p-2 text-white">
                <div class="card-body bg-dark">
                  <h3 class="card-title text-font font-weight-bold">About</h3>
                  <p class="card-text text-font">
                    BE in KCG college of Technology
                  </p>
                  <p class="card-text text-font">Software Engineer in Nokia</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 my-3">
            <div class="card card-flip h-100">
              <div
                class="card-front text-white"
                style={{ backgroundColor: "#802BB1" }}
              >
                <div class="card-body">
                  <img
                    class="rounded-circle float-right"
                    src={Amar}
                    style={{ width: "100px" }}
                  ></img>
                  <h3 class="card-title text-font font-weight-bold">Amaresh</h3>
                  <p class="card-text text-font">Head of sales and marketing</p>
                  <p class="card-text text-font">
                    2+ years industry experiance
                  </p>
                </div>
              </div>
              <div class="card-back bg-white p-2 text-light">
                <div class="card-body" style={{ backgroundColor: "#802BB1" }}>
                  <h3 class="card-title text-font text-weight-bold">About</h3>
                  <p class="card-text text-font">
                    BTech in Hindustan university
                  </p>
                  <p class="card-text text-font">
                    Pursueing MBA in manipal university
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4 my-3">
            <div class="card card-flip h-100">
              <div
                class="card-front text-white"
                style={{ backgroundColor: "#2D283E" }}
              >
                <div class="card-body">
                  <img
                    class="rounded-circle float-right"
                    src={Pratheep}
                    style={{ width: "100px" }}
                  ></img>
                  <h3 class="card-title text-font font-weight-bold">
                    Pratheep
                  </h3>
                  <p class="card-text text-font">Software specialist</p>
                  <p class="card-text text-font">
                    2+ years experiance in Software industry
                  </p>
                </div>
              </div>
              <div class="card-back text-white p-2">
                <div class="card-body bg-dark">
                  <h3 class="card-title text-font font-weight-bold">About</h3>
                  <p class="card-text text-font">
                    BE in KCG college of Technology
                  </p>
                  <p class="card-text text-font">Software Engineer in Nokia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
