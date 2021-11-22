import React from 'react';
import logo from '../assets/logo.png';



export default class Hero extends React.Component {

    render() {
 
        return (

<div className="hero">


        <img className="logoprincipal" src={logo} alt="logo" />       

        <h3>
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h3>

          <button class="button btn btn-outline-info" type="button">Let's go!</button>
     

</div>

        )
   }
}