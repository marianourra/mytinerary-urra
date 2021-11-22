import React from 'react';
import fb from "../assets/iconos/facebook.png";
import insta from "../assets/iconos/instagram.png";
import whatsapp from "../assets/iconos/whatsapp.png";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {

    render() {

        return (

            <footer>

<div className="redes">

<a href="http://www.facebook.com"><img className="logo1" src={fb} alt="fb" /></a>
<a href="http://www.instagram.com"><img className="logo2" src={insta} alt="insta" /></a>
<a href="http://www.whatsapp.com"><img className="logo3" src={whatsapp} alt="whatsapp"/></a>
</div>

<div className="footernav">
<Link to="/">Home</Link>
<Link to="cities">Cities</Link>
</div>


<h5> &copy; Mariano Urra </h5>

        </footer>



        )
    }
}