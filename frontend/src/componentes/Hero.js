import React from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";


export default class Hero extends React.Component {

    render() {
 
        return (

<div className="hero">


        <img className="logoprincipal" src={logo} alt="logo" />       

        <h3>
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h3>

          <Link to="cities"> <button class="button btn btn-outline" type="button">Let's go!</button></Link>
     

</div>

        )
   }
}