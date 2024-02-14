import React, { useState } from "react";
import "../ComponentUI/Login.css";
import logo_img from "../Web/official-login.jpg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {
    try {
      const response = axios
        .post("https://backend-ecom-zrif.onrender.com/pages/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data, "register data");
          if (res.data === "user is not register") {
            alert(res.data.msg);
            console.log("dhdh");
            navigate("/register");
          } else {
            localStorage.setItem("token", res.data.token);
            navigate("/");
            // local storage use to store the data in system
          }
        });
      console.log(response.data, "response data"); // handle the response as needed
    } catch (error) {
      console.error("Login failed", error);
    }

    // handle the response as needed
  };
  return (
    <div>
      <div className="logo_container_flex">
        <div className="login_item_1">
          <img className="logo_img" src={logo_img} alt="not" />
        </div>
        <div className="login_item_2">
          <div className="login_item_content">
            <h1>welcome Back,</h1>
            <h6>Sign in to continue</h6>
            <input
              type="text"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleRegister}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

function LogOut() {
  let navi = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navi("/login");
    console.log("hello");
  };
  return (
    <>
      {/* <button onClick={handleClick}>Logout</button> */}
      <NavLink onClick={handleClick}>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          style={{ color: "#ff3333" }}
          size="2x"
        />
      </NavLink>
    </>
  );
}

export { LogOut };
