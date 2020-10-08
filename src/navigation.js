import React from "react";
import { Button, Icon, Menu, Image } from "semantic-ui-react";
import logo from "./logo.jpg";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <Menu stackable>
        <Image className="" src={logo} width={200} height={56} />
        <Menu.Item position="right">
          <Button color="red" icon onClick={() => onRouteChange("signout")}>
            <Icon name="sign-out"></Icon>
            Sign Out
          </Button>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu stackable>
        <Image className="" src={logo} width={200} height={56} />
        <Menu.Item position="right">
          <Button color="blue" icon onClick={() => onRouteChange("signin")}>
            <Icon name="sign-in"></Icon>
            Sign In
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button color="green" icon onClick={() => onRouteChange("register")}>
            <Icon name="edit"></Icon>
            Register
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
};

export default Navigation;
