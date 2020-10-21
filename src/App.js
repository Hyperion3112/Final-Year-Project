import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Signin from "./signin";
import Register from "./register";
import Navigation from "./navigation";
import MainPage from "./mainpage";
import ForgotPass from "./forgotpass";
import User from "./user";
import PerCode from "./percode";

import "./App.css";
import "tachyons";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        roll: "",
        phone: "",
        branch: "",
        div: "",
        email: "",
        password: "",
        percode: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        roll: data.roll,
        branch: data.branch,
        div: data.div,
        phone: data.phone,
        email: data.email,
        password: data.password,
        percode: data.percode,
      },
    });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <User name={this.state.user.name} />
            <MainPage onInputChange={this.onInputChange} />
            <PerCode percode={this.state.user.percode} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
        <BrowserRouter>
          <Switch>
            <Route exact path="/forgotpass" component={ForgotPass}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
