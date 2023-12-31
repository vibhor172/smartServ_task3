import React from "react";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(username)) {
      setError("Invalid email format");
      return;
    }

    if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setError("Invalid password format");
      return;
    }

    if (password !== "SmartServTest@123") {
      setError("Invalid password");
      return;
    }

    // redirect to dashboard page
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src="https://financesonline.com/uploads/2021/02/smartserv-logo.png"
          alt="SMARTSERV"
        />
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;