import React from "react";
import {
  Button,
  Select,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";

/*const optionsbranch = [
  { key: "1", text: "CMPN", value: "cmpn" },
  { key: "2", text: "INFT", value: "inft" },
  { key: "3", text: "EXTC", value: "extc" },
  { key: "4", text: "ETRX", value: "etrx" },
  { key: "5", text: "BIOM", value: "biom" },
];

const optionsdiv = [
  { key: "A", text: "A", value: "a" },
  { key: "B", text: "B", value: "b" },
  { key: "C", text: "C", value: "c" },
];*/

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      roll: "",
      //branch: "",
      //div: "",
      phone: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  onRollChange = (event) => {
    this.setState({
      roll: event.target.value,
    });
  };
  /*onBranchChange = (event) => {
    this.setState({
      branch: event.target.value,
    });
  };
  onDivChange = (event) => {
    this.setState({
      div: event.target.value,
    });
  };*/
  onPhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  onEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onSubmit = () => {
    console.log(this.state);
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        roll: this.state.roll,
        //branch: this.state.branch,
        //div: this.state.div,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { err } = this.props;
    return (
      <Grid
        textAlign="center"
        style={{ height: "90vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Register
          </Header>
          <Form size="large" error={Boolean(err)}>
            <Segment raised>
              <Form.Field required>
                <label>Full Name</label>
                <input
                  placeholder="Full Name"
                  type="text"
                  name="Name"
                  id="Name"
                  onChange={this.onNameChange}
                />
              </Form.Field>
              <Form.Field required>
                <label>Roll Number</label>
                <input
                  placeholder="Roll Number"
                  type="text"
                  name="Roll"
                  id="Roll"
                  onChange={this.onRollChange}
                />
              </Form.Field>
              <Form.Field required>
                <label>Phone Number</label>
                <input
                  placeholder="Phone Number"
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={this.onPhoneChange}
                />
              </Form.Field>

              <Form.Field required>
                <label>Email Address</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </Form.Field>

              <Button
                color="blue"
                fluid
                size="large"
                type="submit"
                value="Register"
                onSubmit={this.onSubmit}
                disabled={
                  !this.state.name ||
                  !this.state.roll ||
                  !this.state.phone ||
                  !this.state.email ||
                  !this.state.password
                }
              >
                Register
              </Button>
            </Segment>
            {err && <Message header="Error" content={err.message} error />}
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
