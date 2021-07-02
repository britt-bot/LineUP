import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Navbar } from 'react-bootstrap';
import Homepage from "./pages/Homepage";
import Users from "./pages/Users"
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Users />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
