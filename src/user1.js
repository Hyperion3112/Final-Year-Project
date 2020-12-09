import React from "react";

const user1 = ({ name, roll, percode }) => {
  return (
    <div className="pa3 ma3">
      <p as="h3">Name: {name}</p>
      <p as="h3">Roll Number: {roll}</p>
      <p as="h3">Permission Code: {percode}</p>
    </div>
  );
};

export default user1;
