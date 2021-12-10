import React from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import {Dropdown } from "react-bootstrap";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="nav">
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
          <input type="checkbox" id="nav-check" />
          <div className="nav-header"></div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/cities"><ion-icon name="airplane-outline"></ion-icon>Cities</Link>
          </div>
          <Link to="/"><img className="user" src={user} alt="user"></img></Link>
          <Dropdown>
  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/signup">Sign up</Dropdown.Item>
    <Dropdown.Item href="/signin">Sign in</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </div>
      </div>
    );
  }
}
