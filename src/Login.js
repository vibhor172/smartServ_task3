import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const navigate = useNavigate();
  
  const validatePassword = (pass) => {
    if (pass.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(pass)) {
      return "Password must contain an uppercase letter.";
    }
    if (!/[0-9]/.test(pass)) {
      return "Password must contain a number.";
    }
    if (!/^[@a-zA-Z0-9]+$/.test(pass)) {
      return "Password should not accept special characters other than @.";
    }
    return "";
  };

  const handlePasswordChange = (ev) => {
    const pass = ev.target.value;
    setPassword(pass);
    setPasswordError(validatePassword(pass));
  };

  const Submit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^@\s]+$/;

    if (emailRegex.test(email) === false) {
      setEmailError("Please enter a valid email address.");
      return; 
    }

    if (password === "SmartServTest@123")  {
      navigate("/dashboard");
    } else {
      setPasswordError("Invalid username or password");
    }
  };

  return (<div className="login-page">
    <div className={"login-container"}>
      <form className="form" onSubmit={Submit}>
        
          <img src="https://financesonline.com/uploads/2021/02/smartserv-logo.png" alt="" />
       
        <br />
        <div className={"inputContainer"}>
          <input
            value={email}
            required
            placeholder="Username"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={password}
            type="password"
            required
            placeholder="Password"
            onChange={handlePasswordChange}
            className={"inputBox"}
          />
          <br />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <button className={"inputButton"} type="submit">
            Login
          </button>
          <br />
          <br />
          <a href="mailto:support@smartserv.io">Forgot your password?</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;

