import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import "./App.css";
import Discover from "./pages/Discover";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Users />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
