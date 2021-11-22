import React from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div class="nav">
          <img className="logo" src={logo} alt="logo" />
          <input type="checkbox" id="nav-check" />
          <div class="nav-header"></div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div> <Link to="/">Home</Link>
            <Link to="cities">Cities</Link>

          <div class="nav-links">
           

          </div>
          <img className="user" src={user} alt="user" />
          
    

        </div>
      </div>
    );
  }
}
