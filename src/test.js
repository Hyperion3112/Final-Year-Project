import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        <Image src="/logo.png" /> Register
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Field>
            <label>Full Name</label>
            <input
              placeholder="Full Name"
              type="text"
              name="Name"
              id="Name"
              onChange={this.onNameChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Roll Number</label>
            <input
              placeholder="Roll Number"
              type="text"
              name="Roll"
              id="Roll"
              onChange={this.onRollChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone Number</label>
            <input
              placeholder="Phone Number"
              type="tel"
              name="phone"
              id="phone"
              onChange={this.onPhoneChange}
            />
          </Form.Field>
          <Form.Field
            control={Select}
            label="Branch"
            options={options}
            placeholder="Branch"
          />
          <Form.Field
            control={Select}
            label="Division"
            options={options}
            placeholder="Division"
          />
          <Form.Field>
            <label>Email Address</label>
            <input
              placeholder="Email"
              type="email"
              name="email-address"
              id="email-address"
              onChange={this.onEmailChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              name="Password"
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
            onClick={(() => onRouteChange("home"), this.onSubmit)}
          >
            Register
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
