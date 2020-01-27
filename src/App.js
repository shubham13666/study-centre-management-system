import React from "react";
import SignIn from "./containers/signIn";
import SignUp from "./containers/signUp";
import LandingPage from "./containers/landingPage";
import Home from "./containers/Home/index";
import "./App.css";
function App() {
  return (
    <div className="App">
      {<Home/>}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
