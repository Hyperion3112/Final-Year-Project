import React from "react";
import { Message, Container } from "semantic-ui-react";

const PerCode = ({ percode }) => (
  <Container text>
    <div className="pa5">
      <Message color="purple">
        Your Permission Code is <b>{percode}</b>
      </Message>
    </div>
  </Container>
);

export default PerCode;
