import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import "./App.css";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <UserProvider>
            <Route exact path="/profile" component={Profile} />
          </UserProvider>
          <Route exact path="/signup" component={Signup} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
