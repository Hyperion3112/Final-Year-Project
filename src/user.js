import React from "react";
import { Header } from "semantic-ui-react";

const user = ({ name }) => {
  return (
    <div className="pa3 ma3">
      <Header as="h2">Hello {name}</Header>
    </div>
  );
};

export default user;
