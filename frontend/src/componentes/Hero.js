import React from "react";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <div className="ernesto">

        <div className="herostyle">
          
          <div className="mixlogo">
            <img className="logo2" src={logo} alt="logo" />{" "}
            <h1 className="maintitle"> MyTinerary</h1>
          </div>

          <h3>
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h3>
          <Button className="button" color="warning">
            Let's go!
          </Button>
        </div>
      </div>
    );
  }
}

export default Hero;
