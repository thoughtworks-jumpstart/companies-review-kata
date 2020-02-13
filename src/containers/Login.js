import React, { useState } from "react";
import "./Login.css";

const Login = ({ setIsLogin, setUserName, history }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    setIsLogin(true);
    setUserName(name);
    history.push("/");
  };

  return (
    <div data-testid="login" className="login-page">
      <div>
        <label>Login</label>
        <input
          aria-label="login"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          aria-label="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <button data-testid="login-button" onClick={login}>
        Login button
      </button>
    </div>
  );
};

export default Login;
