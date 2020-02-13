import React, { useState } from "react";
import "./App.css";
import Companies from "./containers/Companies";
import CompanyDetail from "./containers/CompanyDetail";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import Login from "./containers/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <div>
            <NavLink exact to="/">
              CompanyReviews
            </NavLink>
            {!isLogin && (
              <NavLink exact to="/login">
                Login
              </NavLink>
            )}
          </div>
          <div>
            {isLogin && (
              <button onClick={() => setIsLogin(false)}>Logout</button>
            )}
          </div>
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
          {!isLogin && (
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <Login
                  history={history}
                  setIsLogin={setIsLogin}
                  setUserName={setUsername}
                />
              )}
            />
          )}

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
