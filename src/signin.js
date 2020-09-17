import React from "react";
import "./signin.css";
//dvcsdvc

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
      phone1: "",
      phone2: "",
      phone3: "",
      email1: "",
      email2: "",
      email3: "",
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
    fetch("http://localhost:3000/signin", {
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
        <article className="">
          <main className="">
            <form>
              <fieldset className="">
                <legend className="f1">Group Formation Form</legend>

                <div className="shadow-5 mt5 pb4 ">
                  <div className="inaline w-33 left center block ">
                    <label className="fw6 f3" htmlFor="Roll">
                      Roll No. of student 1
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="text"
                      name="Roll1"
                      onChange={this.onRoll1Change}
                    />
                  </div>
                  <div className="inaline w-33 left center block ">
                    <label className=" fw6  f3" htmlFor="Roll">
                      Roll No. of student 2
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="text"
                      name="Roll2"
                      onChange={this.onRoll2Change}
                    />
                  </div>
                  <div className="inaline w-33 left center block">
                    <label className="  fw6  f3" htmlFor="Roll">
                      Roll No. of student 3
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="text"
                      name="Roll3"
                      onChange={this.onRoll3Change}
                    />
                  </div>
                </div>

                <div className="shadow-5 mt5 pb4">
                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="Name">
                      Name
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="text"
                      name="Name1"
                      onChange={this.onName1Change}
                    />
                  </div>

                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="Name">
                      Name
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="text"
                      name="Name2"
                      onChange={this.onName2Change}
                    />
                  </div>

                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="Name">
                      Name
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="text"
                      name="Name3"
                      onChange={this.onName3Change}
                    />
                  </div>
                </div>

                <div className="shadow-5 mt5 pb4">
                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="phone">
                      Phone No.
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="text"
                      name="phone1"
                      onChange={this.onPhone1Change}
                    />
                  </div>

                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="phone">
                      Phone No.
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="text"
                      name="phone2"
                      onChange={this.onPhone2Change}
                    />
                  </div>

                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="phone">
                      Phone No.
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="text"
                      name="phone3"
                      onChange={this.onPhone3Change}
                    />
                  </div>
                </div>

                <div className="shadow-5 mt5 pb4">
                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="email-address">
                      Email
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="email"
                      name="email1"
                      id="email1"
                      onChange={this.onEmail1Change}
                    />
                  </div>

                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="email-address">
                      Email
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="email"
                      name="email2"
                      id="email2"
                      onChange={this.onEmail2Change}
                    />
                  </div>

                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="email-address">
                      Email
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="email"
                      name="email3"
                      id="email3"
                      onChange={this.onEmail3Change}
                    />
                  </div>
                </div>

                <div className="shadow-5 mt5 pb4">
                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="email-address">
                      Password
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="password"
                      name="password1"
                      id="password1"
                      onChange={this.onPassword1Change}
                    />
                  </div>

                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="email-address">
                      Password
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="password"
                      name="password2"
                      id="password2"
                      onChange={this.onPassword2Change}
                    />
                  </div>

                  <div className="inaline w-33 left center block">
                    <label className="fw6  f3" htmlFor="email-address">
                      Password
                    </label>
                    <input
                      className="input-reset w-100 bg-transparent hover-bg-black hover-white"
                      type="password"
                      name="password3"
                      id="password3"
                      onChange={this.onPassword3Change}
                    />
                  </div>
                </div>

                <div className="pt5">
                  <label className="db pl30 fw6 lh-copy f3">
                    Domain and preference{" "}
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-40"
                    type="text"
                    name="domain1"
                    onChange={this.onDomain1Change}
                  />
                  <select className=" pa2 ">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">
                      Coconut
                    </option>
                    <option value="mango">Mango</option>
                  </select>
                </div>

                <div className="pt5">
                  <label className="db pl30 fw6 lh-copy f3">
                    Domain and preference{" "}
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-40"
                    type="text"
                    name="domain2"
                    onChange={this.onDomain2Change}
                  />
                  <select className=" pa2 ">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">
                      Coconut
                    </option>
                    <option value="mango">Mango</option>
                  </select>
                </div>

                <div className="pt5">
                  <label className="db pl30 fw6 lh-copy f3">
                    Domain and preference{" "}
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-40"
                    type="text"
                    name="domain3"
                    onChange={this.onDomain3Change}
                  />
                  <select className=" pa2 ">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">
                      Coconut
                    </option>
                    <option value="mango">Mango</option>
                  </select>
                </div>

                <div className="ma5">
                  <input
                    className="br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib"
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
