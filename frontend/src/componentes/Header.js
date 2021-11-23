import React from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div class="nav">
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
          <input type="checkbox" id="nav-check" />
          <div class="nav-header"></div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="cities"><ion-icon name="airplane-outline"></ion-icon>Cities</Link>
          </div>
          <a href=""><img className="user" src={user} alt="user"></img></a>
        </div>
      </div>
    );
  }
}
