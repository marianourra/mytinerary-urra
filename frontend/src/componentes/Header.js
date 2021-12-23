import React from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import {Dropdown } from "react-bootstrap";
import userActions from "../redux/actions/userActions"
import {connect} from "react-redux";


const Header = (props) => {
  
  console.log("props", props)

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
          {props.name ? <img className="profilepic" src={props.image_url} alt="user"/> : <Link to="/signin"><img className="user" src={user} alt="user"/></Link>  }
          
          <Dropdown>
  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {props.name ? 
    <><Dropdown.Item onClick={()=> props.logOut()} href="/signin">Log out</Dropdown.Item></>
     : 
    <><Dropdown.Item href="/signup">Sign up</Dropdown.Item> 
    <Dropdown.Item href="/signin">Sign in</Dropdown.Item></>}
  </Dropdown.Menu>
</Dropdown>
        </div>
      </div>
    );
  }


const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    name: state.users.name,
    image_url: state.users.image_url
  }
}

const mapDispatchToProps ={
  logOut:userActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps) (Header)