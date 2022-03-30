import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";
import axios from "axios";
function AdminPageVerify() {
  const navigate = useNavigate();
  const [userEmail, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submithandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios
        .post("/user/login", { email: userEmail, pass: password }, config)
        .then((res) => {
          if (res.data.msg) {
            window.alert("wrong info");
          } else {
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            navigate("/adminpage");
          }
        })
        .catch((err) => {
          window.alert("invalid info");
        });
    } catch (err) {
      throw new Error("invalide info");
    }
  };
  return (
    <div className="main">
      <div>
        <Link to={"/"}>
          <button
            style={{
              margin: "20px",
              marginLeft: "48%",
              border: "none",
              width: "4rem",
              fontWeight: "1000",
            }}
          >
            HOME
          </button>
        </Link>
      </div>
      <header className="hero-admin">
        <div className="loginform ">
          <div className="form">
            <div className="input-container">
              <input
                type="text"
                name="uname"
                placeholder="username"
                required
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="pass"
                placeholder="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="submit-main">
              <div className="button-container">
                <input type="submit" onClick={submithandler} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default AdminPageVerify;
