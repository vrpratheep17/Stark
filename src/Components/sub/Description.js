import React, { Component } from "react";

export default class Description extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 text-color">
            <div class="d-flex align-items-start flex-column bd-highlight mb-3 bg-primary left-card">
              <div class=" p-2 bd-highlight">
                <div className="font-size-heading text-font">15+</div>
                <div>YEARS OF EXPERIANCE</div>
              </div>
              <div class=" p-2 bd-highlight">
                <div className="font-size-heading text-font">95</div>
                <div>SUCCESS RATE</div>
              </div>
              <div class=" p-2 bd-highlight">
                <div className="font-size-heading text-font">1000+</div>
                <div>PLACEMENTS</div>
              </div>

              <div class=" p-2 bd-highlight">
                <div className="font-size-heading text-font">5</div>
                <div>YEARS IN BUSINESS</div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-9  text-center d-lg-block d-none testing"
            style={{ position: "relative", width: "100%" }}
          >
            <div
              class="row"
              style={{
                position: "absolute",
                top: "0",
                width: "100%",
                height: "100%"
              }}
            >
              <div class="col align-self-start">
                <div class="card card-border-shadow">
                  <div class="card-body">
                    <h5 class="card-title  font-weight-bold text-font">Pratical Coaching</h5>

                    <p class="card-text text-font">
                      Experts with 10+ years of industry experiance
                    </p>
                  </div>
                </div>
              </div>
              <div class="col align-self-center">
                <div class="card card-border-shadow">
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold text-font">Live projects</h5>

                    <p class="card-text text-font">
                      Top notch projects to enhance skills
                    </p>
                  </div>
                </div>
              </div>
              <div class="col align-self-end">
                <div class="card card-border-shadow">
                  <div class="card-body">
                    <h5 class="card-title text-font font-weight-bold">Placements</h5>

                    <p class="card-text text-font">tied up with 50+ organizations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
