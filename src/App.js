import React, { useState, Fragment } from "react";
import "./App.css";
import Companies from "./containers/Companies";
import CompanyDetail from "./containers/CompanyDetail";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Login from "./containers/Login";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState();

  const logoutRoutes = () => {
    return (
      <Fragment>
        <Route
          exact
          path="/login"
          render={routeProps => (
            <Login
              {...routeProps}
              setIsLogin={setIsLogin}
              setUserName={setUsername}
            />
          )}
        />
      </Fragment>
    );
  };
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          {!isLogin && <Link to="/login">Login</Link>}
          {isLogin && <button onClick={() => setIsLogin(false)}>Logout</button>}
        </header>
        <Switch>
          <Route exact path="/" component={Companies} />
          <Route
            exact
            path="/companies/:id"
            render={routeProps => (
              <CompanyDetail
                isLogin={isLogin}
                username={username}
                {...routeProps}
              />
            )}
          />
          {!isLogin && logoutRoutes()}

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
