import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="divHeader">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid">
            <img className="logo" src={logo} alt="logo" />{" "}
            <a class="navbar-brand" href="#">
              MyTinerary
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="../public/index.html"
                >
                  Home
                </a>
                <a class="nav-link" href="">
                  Cities
                </a>
              </div>
              <img className="user" src={user} alt="user" />
            </div>
          </div>
        </nav>

        <div></div>
      </div>
    );
  }
}
