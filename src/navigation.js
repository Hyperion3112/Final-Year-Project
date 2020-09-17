import react from "react";

const Navigation = ({ onRouteChange, IsSignedIn }) => {
  if (IsSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p>
          {" "}
          onClick={onRouteChange} className='f3 link dim black underline pa3
          pointer'
        </p>
      </nav>
    );
  }
};

export default Navigation;
