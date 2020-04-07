import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AddResearchPost from './components/AddOpportunity/AddResearchPost'
import SignUp  from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
    <Route exact path="/" component={App} />
    <Route exact path="/researchOpportunity" component={AddResearchPost} />
    <Route exact path="/SignUp" component={SignUp} />
    <Route exact path="/SignIn" component={SignIn} />

  </Switch>
  </BrowserRouter>,
  rootElement
);