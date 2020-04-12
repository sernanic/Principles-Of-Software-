

import React from "react";
import { BrowserRouter, Route, Switch,withRouter } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import AddResearchPost from './components/AddOpportunity/AddResearchPost'
import SignUp  from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import OpportunityInfo from './components/OpportunityInfo/OpportunityInfo'
import Home from './components/Home/Home'
const App = () => 
{
    return(
        <BrowserRouter>
        <Switch>
            ResearchResults
            <Route exact path="/" component={Home} />
            <Route exact path="/researchOpportunity" component={AddResearchPost} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/OpportunityInfo" component={OpportunityInfo} />
            {/* <Route exact path="/ResearchBar" component={ResearchBar} /> */}
        </Switch>
    </BrowserRouter>
    )
    
}
export default withRouter(App);
