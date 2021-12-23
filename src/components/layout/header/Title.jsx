import React from "react";
import Me from "../../../img/meddilogo.png";
import "./Header.css";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Title() {
  return (
    <div className="header">
      <div className="i-header">
        <img src={Me} className="logo" alt="eroor" />
      </div>
      <div className="about">
        <Router>
        <Link to="/about">About</Link>
        </Router>
      </div>
    </div>
  );
}

export default Title;
