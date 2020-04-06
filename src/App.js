// The comments below is an App.js version the uses authentication

// import React from "react";
// import { Router } from "@reach/router";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import ProfilePage from "./ProfilePage";
// // import PasswordReset from "./PasswordReset";
// function Application() {
//   const user = null;
//   return (
//         user ?
//         <ProfilePage />
//       :
//         <Router>
//           <SignUp path="signUp" />
//           <SignIn path="/" />
//           <PasswordReset path = "passwordReset" />
//         </Router>

//   );
// }
// export default Application;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'


const App = () => {
    return (
        <div>
            <Home/>
        </div>
    )
}

export default App;