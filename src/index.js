import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import AddResearchPost from './components/AddOpportunity/AddResearchPost'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/researchOpportunity" component={AddResearchPost} />
  </Switch>
  </BrowserRouter>,
  rootElement
);