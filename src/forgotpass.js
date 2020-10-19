import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class ForgotPass extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      confirmPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({
      Email: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      Password: event.target.value,
    });
  };

  onConfirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  onSubmit = () => {
    console.log(this.state);
    this.props.onRouteChange("home");
    fetch("http://localhost:3000/forgotpassword", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.Email,
        password: this.state.Password,
        confirmpassword: this.state.confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.onRouteChange("home");
        } else {
          this.props.onRouteChange("signin");
        }
      });
  };

  render() {
    return (
      <div className="zindex:1">
        <Grid
          textAlign="center"
          style={{ height: "75vh" }}
          verticalAlign="middle"
          zindex="1"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="white" textAlign="center">
              Reset your Password
            </Header>
            <Form size="large">
              <Segment raised>
                <Form.Input
                  fluid
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                  placeholder="Email address"
                />
                <Form.Input
                  fluid
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
                <Form.Input
                  fluid
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  onChange={this.onConfirmPasswordChange}
                />
                <Button
                  color="blue"
                  fluid
                  size="large"
                  value="submit"
                  onClick={this.onSubmit}
                >
                  Reset Password
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default ForgotPass;
