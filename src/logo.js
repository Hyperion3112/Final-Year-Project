import React from "react";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="">
      <div className="pl4">
        <img
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            float: "left",
            height: "200px",
            width: "200px",
          }}
          alt="logo"
          src={logo}
        />
      </div>
    </div>
  );
};

export default Logo;
