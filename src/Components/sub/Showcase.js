import React, { Component } from "react";
import rightImage from "../assets/Images/right.png";
import downArrow from "../assets/Images/downArrow.png";
import Question from "./Question";
export default class Showcase extends Component {
  render() {
    return (
      <div
        className="showcase-image"
        style={{ marginTop: "60px", overflowX: "hidden" }}
      >
        <div className="showcase-image-overlay">
          <div className="row mt-5">
            <div className="col-lg-8 showcase-left text-color">
              <div class="d-flex flex-column bd-highlight mb-3">
                <h3 class="text-center text-font" style={{ fontSize: "200%" }}>
                  Want to learn what does your syllabus convey ?
                </h3>
                <h3
                  class="text-center text-font mt-2"
                  style={{ fontSize: "200%" }}
                >
                  Want to start your job with good package ?
                </h3>
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: "-45px",
                    position: "relative"
                  }}
                >
                  <img
                    src={downArrow}
                    style={{ height: "50px", width: "50px" }}
                    className="object"
                  ></img>
                </div>

                <div class="text-center text-font mt-5">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    class="btn mt-5 buttonJoin btn-lg"
                  >
                    Join Us
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 showcase-right  d-none d-lg-block ">
              <img src={rightImage} alt="image" class="img-fluid" />
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  let's kick start your dream life
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <Question />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const backgroundImage = {};
