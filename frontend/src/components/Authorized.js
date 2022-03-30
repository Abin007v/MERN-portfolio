import React from "react";
import { Link } from "react-router-dom";
function Authorized() {
  return (
    <div
      style={{
        height: "95vh",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 38, 38, 0.863)",
          padding: "20px 40px",
          borderRadius: "10px",
        }}
      >
        <h2>Not Authorized</h2>
        <Link to={"/"}>
          <button>HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default Authorized;
