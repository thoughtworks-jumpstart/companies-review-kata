import React from "react";
import "./App.css";
import Companies from "./containers/Companies";
import CompanyDetail from "./containers/CompanyDetail";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Companies} />
          <Route exact path="/companies/:id" component={CompanyDetail} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
