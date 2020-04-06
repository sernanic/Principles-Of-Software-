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

import React from 'react'
import { auth } from './firebase/index'
import HorizontalScroll from './components/HorizontalScroll'
import AddResearchPost from './components/AddResearchPost'


const Home = () => {
    return (
        <div>
            <button onClick={() => auth.signOut()}>Sign Out</button>
            <HorizontalScroll />
            <br />
            <HorizontalScroll />
            <AddResearchPost />

        </div>
    )
}

export default Home;