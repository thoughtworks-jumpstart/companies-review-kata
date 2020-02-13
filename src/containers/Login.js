import React, { useState } from "react";

const Login = ({ setIsLogin, setUserName, history }) => {
  const [name, setName] = useState("");
  const login = () => {
    setIsLogin(true);
    setUserName(name);
    history.push("/");
  };

  return (
    <div data-testid="login">
      <div>
        <label>Login</label>
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
