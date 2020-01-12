import React, { Component } from "react";

export default class Question extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      question1Answer: false,
      question2Answer: false,
      question3Answer: false
    };
  }
  incrementNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  render() {
    const { number } = this.state;

    let display;
    if (number == 0) {
      display = (
        <div style={{ textAlign: "center" }}>
          <div>Do you want to built fly machines?</div>
          <div>
            <button
              onClick={() => {
                this.incrementNumber();
                this.setState({
                  question1Answer: true
                });
              }}
              type="button"
              class="btn btn-success m-2"
            >
              Yes
            </button>
            <button
              onClick={() => {
                this.incrementNumber();
                this.setState({
                  question1Answer: false
                });
              }}
              type="button"
              class="btn btn-danger m-2"
            >
              No
            </button>
          </div>
        </div>
      );
    } else if (number == 1) {
      display = (
        <div style={{ textAlign: "center" }}>
          <div>We are helping to make it happen ! do you want to join?</div>
          <div>
            <button
              onClick={() => {
                this.incrementNumber();
                this.setState({
                  question2Answer: true
                });
              }}
              type="button"
              class="btn btn-success m-2"
            >
              Yes
            </button>
            <button
              onClick={() => {
                this.incrementNumber();
                this.setState({
                  question2Answer: false
                });
              }}
              type="button"
              class="btn btn-danger m-2"
            >
              No
            </button>
          </div>
        </div>
      );
    } else if (number == 2) {
      display = (
        <div style={{ textAlign: "center" }}>
          <div>Bored with regular syllabus?</div>
          <div>
            <button
              onClick={() => {
                this.incrementNumber();
                this.setState({
                  question3Answer: true
                });
              }}
              type="button"
              class="btn btn-success m-2"
            >
              Yes
            </button>
            <button
              onClick={() => {
                this.incrementNumber();
                this.setState({
                  question3Answer: false
                });
              }}
              type="button"
              class="btn btn-danger m-2"
            >
              No
            </button>
          </div>
        </div>
      );
    } else if (number == 3) {
      display = (
        <div style={{ textAlign: "center" }}>
          <div>Yes we are bringing Exicting learning experiance</div>
          <div>
            <button
              onClick={() => {
                this.incrementNumber();
              }}
              type="button"
              class="btn buttonJoinOpp m-2"
            >
              Take me there
            </button>
          </div>
        </div>
      );
    } else if (number == 5) {
      display = (
        <div style={{ textAlign: "center" }}>
          <div>
            Case name: Masters - Aircraft vehicle design and prototyping
            Incorporated with industrial oriented R&D syllabus
          </div>
          <div>Hardware: CNC[Industry] , VMC[Industry]</div>
          <div>Software: CREO[Industry] , CATIA[Industry]</div>
          <div>Course duration: 6 Months</div>

          <div>
            <button
              onClick={() => {
                this.incrementNumber();
              }}
              type="button"
              class="btn btn-danger m-2"
            >
              Enroll me
            </button>
          </div>
        </div>
      );
    } else if (number == 4) {
      display = (
        <div>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Mobile number</label>
              <input
                type="number"
                class="form-control"
                placeholder="please enter mobile number"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button type="submit" class="btn buttonJoin btn-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }

    return <div>{display}</div>;
  }
}
