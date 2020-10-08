import React from "react";
import logo from "./logo.png";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Checkbox,
} from "semantic-ui-react";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({
      signInEmail: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      signInPassword: event.target.value,
    });
  };

  onSubmit = () => {
    console.log(this.state);
    this.props.onRouteChange("home");
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
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
    const { onRouteChange } = this.props;
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
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onPasswordChange}
                  type="password"
                />
                <Form.Field control={Checkbox} label="Remember Me" />

                <Button
                  color="blue"
                  fluid
                  size="large"
                  value="Sign In"
                  onClick={this.onSubmit}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us?{" "}
              <a
                onClick={() => onRouteChange("register")}
                className="f6 link dim black db pointer"
              >
                Register
              </a>
              <a
                onClick={() => onRouteChange("forgotpassword")}
                className="f6 link dim black db pointer"
              >
                Forgot Password?
              </a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signin;
