import React from "react";
import "./signin.css";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      Name1: "",
      Name2: "",
      Name3: "",
      Roll1: "",
      Roll2: "",
      Roll3: "",
      Code1: "",
      Code2: "",
      Code3: "",
    };
  }

  onName1Change = (event) => {
    this.setState({ Name1: event.target.value });
  };

  onName2Change = (event) => {
    this.setState({ Name2: event.target.value });
  };

  onName3Change = (event) => {
    this.setState({ Name3: event.target.value });
  };
  onRoll1Change = (event) => {
    this.setState({ Roll1: event.target.value });
  };

  onRoll2Change = (event) => {
    this.setState({ Roll2: event.target.value });
  };

  onRoll3Change = (event) => {
    this.setState({ Roll3: event.target.value });
  };

  onCode1Change = (event) => {
    this.setState({ Code1: event.target.value });
  };

  onCode2Change = (event) => {
    this.setState({ Code2: event.target.value });
  };

  onCode3Change = (event) => {
    this.setState({ Code3: event.target.value });
  };

  onSubmit = () => {
    console.log(this.state);
    fetch("http://localhost:3000/GroupForm", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name1: this.state.Name1,
        name2: this.state.Name2,
        name3: this.state.Name3,
        roll1: this.state.Roll1,
        roll2: this.state.Roll2,
        roll3: this.state.Roll3,
        code1: this.state.Code1,
        code2: this.state.Code2,
        code3: this.state.Code3,
      }),
    }).then((response) => response.json());
  };

  render() {
    return (
      <body>
        <legend className="f1 ph0 mh0 center">Group Formation Form</legend>
        <p>Enter the details of all the group members</p>
        <article className="br3 ba center mw6 b--black-10 w-100 mv4 shadow-5">
          <main className="pa4 black-80">
            <form>
              <fieldset className="ba b--transparent ph0 mh0">
                <div className="fw7 lh-copy f4 inaline">
                  Enter the details of Student 1
                </div>
                <div className="mb3">
                  <div className="fl w-100">
                    <div
                      className="fl fw6 lh-copy mb3 f6 w-25 inaline"
                      htmlFor="name"
                    >
                      Full Name:
                    </div>
                    <div class="fl w-75">
                      <input
                        placeholder="Enter Name"
                        type="text"
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        name="Name1"
                        id="Name1"
                        onChange={this.onName1Change}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb3">
                  <div className="fl w-100">
                    <div
                      className="fl fw6 lh-copy mb3 f6 w-25 inaline"
                      htmlFor="roll"
                    >
                      Roll Number:
                    </div>
                    <div class="fl w-75">
                      <input
                        type="text"
                        placeholder="Enter Roll Number"
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        name="Roll1"
                        id="Roll1"
                        onChange={this.onRoll1Change}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb3">
                  <div className="fl w-100">
                    <div
                      className="fl fw6 lh-copy mb3 f6 w-25 inaline"
                      htmlFor="code"
                    >
                      Permission Code:
                    </div>
                    <div class="fl w-75">
                      <input
                        type="text"
                        placeholder="Enter Code"
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        name="Code1"
                        id="Code1"
                      />
                    </div>
                  </div>
                </div>
                <div className="fw7 lh-copy f4 inaline">
                  Enter the details of Student 2
                </div>
                <div className="mb3">
                  <div className="fl w-100">
                    <div
                      className="fl fw6 lh-copy mb3 f6 w-25 inaline"
                      htmlFor="name"
                    >
                      Full Name:
                    </div>
                    <div class="fl w-75">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        name="Name2"
                        id="Name2"
                        nChange={this.onName2Change}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb3">
                  <div className="fl w-100">
                    <div
                      className="fl fw6 lh-copy mb3 f6 w-25 inaline"
                      htmlFor="roll"
                    >
                      Roll Number:
                    </div>
                    <div class="fl w-75">
                      <input
                        type="text"
                        placeholder="Enter Roll Number"
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        name="Roll2"
                        id="Roll2"
                        onChange={this.onRoll2Change}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb3">
                  <div className="fl w-100">
                    <div
                      className="fl fw6 lh-copy mb3 f6 w-25 inaline"
                      htmlFor="code"
                    >
                      Permission Code:
                    </div>
                    <div class="fl w-75">
                      <input
                        type="text"
                        placeholder="Enter Code"
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        name="Code2"
                        id="Code2"
                      />
                    </div>
                  </div>
                </div>
                <div className="fw7 lh-copy f4 inaline">
                  Enter the details of Student 3
                </div>
                <div className="mb3">
                  <div className="fl w-100">
                    <div
                      className="fl fw6 lh-copy mb3 f6 w-25 inaline"
                      htmlFor="name"
                    >
                      Full Name:
                    </div>
                    <div class="fl w-75">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        name="Name3"
                        id="Name3"
                        nChange={this.onName3Change}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb3">
                  <div className="fl w-100">
                    <div
                      className="fl fw6 lh-copy mb3 f6 w-25 inaline"
                      htmlFor="roll"
                    >
                      Roll Number:
                    </div>
                    <div class="fl w-75">
                      <input
                        type="text"
                        placeholder="Enter Roll Number"
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        name="Roll3"
                        id="Roll3"
                        onChange={this.onRoll3Change}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb3">
                  <div className="fl w-100">
                    <div
                      className="fl fw6 lh-copy mb3 f6 w-25 inaline"
                      htmlFor="code"
                    >
                      Permission Code:
                    </div>
                    <div class="fl w-75">
                      <input
                        type="text"
                        placeholder="Enter Code"
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        name="Code3"
                        id="Code3"
                      />
                    </div>
                  </div>
                </div>
                <div className="ma5">
                  <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Submit"
                    onClick={this.onSubmit}
                  />
                </div>
              </fieldset>
            </form>
          </main>
        </article>
      </body>
    );
  }
}

export default Signin;
