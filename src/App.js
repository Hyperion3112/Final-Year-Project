import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Signin from "./signin";
import Register from "./register";
import Navigation from "./navigation";
import MainPage from "./mainpage";
import ForgotPass from "./forgotpass";

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
        email: "",
        password: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        roll: data.roll,
        phone: data.phone,
        email: data.email,
        password: data.password,
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
            <MainPage onInputChange={this.onInputChange} />
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
