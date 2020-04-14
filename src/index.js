import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import AddResearchPost from './components/AddOpportunity/AddResearchPost'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import papers from './components/ResearchPapers/papers'
=======
>>>>>>> upstream/master

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
<<<<<<< HEAD
    <Switch>
      ResearchResults
    <Route exact path="/" component={App} />
      <Route exact path="/researchOpportunity" component={AddResearchPost} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/addPublishedResearchPaper" component={papers} />
      {/* <Route exact path="/ResearchBar" component={ResearchBar} /> */}
    </Switch>
  </BrowserRouter>,
=======
     <App />
   </BrowserRouter>,
>>>>>>> upstream/master
  rootElement
);