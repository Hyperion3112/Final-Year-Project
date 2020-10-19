import React from "react";
import { Message } from "semantic-ui-react";
import PasswordWithGenerator from "react-password-with-generator";

const PerCode = () => (
  <div className="pa5">
    <Message color="purple">
      <PasswordWithGenerator passwordCustomLength={5} />
    </Message>
  </div>
);

export default PerCode;
