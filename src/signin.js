import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { BrowserRouter, Link } from "react-router-dom";

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
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <BrowserRouter>
        <div className="zindex:1">
          <Grid
            textAlign="center"
            style={{ height: "75vh" }}
            verticalAlign="middle"
            zindex="1"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" textAlign="center">
                Log-in to your account
              </Header>
              <Form size="large">
                <Segment raised>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    placeholder="Email address"
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                  <Form.Checkbox label="Remember Me" />
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
                <Link
                  onClick={() => onRouteChange("register")}
                  className="f6 link dim black db pointer"
                >
                  Register
                </Link>
                <Link to="/forgotpass" className="f6 dim black db pointer">
                  Forgot Password?
                </Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default Signin;
