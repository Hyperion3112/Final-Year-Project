import React from "react";
import "./signin.css";

class Signin extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Roll1: "",
      Roll2: "",
      Roll3: "",
      Name1: "",
      Name2: "",
      Name3: "",
      password1: "",
      password2: "",
      password3: "",
      domain1: "",
      domain2: "",
      domain3: "",
    };
  }

  onRoll1Change = (event) => {
    this.setState({ Roll1: event.target.value });
  };

  onRoll2Change = (event) => {
    this.setState({ Roll2: event.target.value });
  };

  onRoll3Change = (event) => {
    this.setState({ Roll3: event.target.value });
  };

  onName1Change = (event) => {
    this.setState({ Name1: event.target.value });
  };

  onName2Change = (event) => {
    this.setState({ Name2: event.target.value });
  };

  onName3Change = (event) => {
    this.setState({ Name3: event.target.value });
  };

  onPhone1Change = (event) => {
    this.setState({ phone1: event.target.value });
  };

  onPhone2Change = (event) => {
    this.setState({ phone2: event.target.value });
  };

  onPhone3Change = (event) => {
    this.setState({ phone3: event.target.value });
  };

  onEmail1Change = (event) => {
    this.setState({ email1: event.target.value });
  };

  onEmail2Change = (event) => {
    this.setState({ email2: event.target.value });
  };

  onEmail3Change = (event) => {
    this.setState({ email3: event.target.value });
  };

  onPassword1Change = (event) => {
    this.setState({ phone1: event.target.value });
  };

  onPassword2Change = (event) => {
    this.setState({ phone2: event.target.value });
  };

  onPassword3Change = (event) => {
    this.setState({ phone3: event.target.value });
  };

  onDomain1Change = (event) => {
    this.setState({ domain1: event.target.value });
  };

  onDomain2Change = (event) => {
    this.setState({ domain2: event.target.value });
  };

  onDomain3Change = (event) => {
    this.setState({ domain3: event.target.value });
  };

  onSubmit = () => {
    fetch("http://localhost:3000/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roll1: this.state.Roll1,
        roll2: this.state.Roll2,
        roll3: this.state.Roll3,
        name1: this.state.Name1,
        name2: this.state.Name2,
        name3: this.state.Name3,
        phone1: this.state.phone1,
        phone2: this.state.phone2,
        phone3: this.state.phone3,
        email1: this.state.email1,
        email2: this.state.email2,
        email3: this.state.email3,
        password1: this.state.password1,
        password2: this.state.password2,
        password3: this.state.password3,
        domain1: this.state.domain1,
        domain2: this.state.domain2,
        domain3: this.state.domain3,
      }),
    });
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
                        name="name"
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
                        name="roll"
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
                        name="code"
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
                        name="name"
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
                        name="roll"
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
                        name="code"
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
                        name="name"
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
                        name="roll"
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
                        name="code"
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
