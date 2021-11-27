import React from 'react';
import fb from "../assets/iconos/facebook.png";
import insta from "../assets/iconos/instagram.png";
import whatsapp from "../assets/iconos/whatsapp.png";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {

    render() {

        return (

            <footer>

<figure>
<a href="http://www.facebook.com"><img className="logo1" src={fb} alt="fb" /></a>
<a href="http://www.instagram.com"><img className="logo2" src={insta} alt="insta" /></a>
<a href="http://www.whatsapp.com"><img className="logo3" src={whatsapp} alt="whatsapp"/></a>
</figure>

<div className="footernav">
<Link to="/"><h6>Home</h6></Link>
<br/>
<Link to="/cities"><h6>Cities</h6></Link>
</div>

<div>
<p>Developed by</p>
<a href="https://www.linkedin.com/in/mariano-urra/"> <h6> &copy; Mariano Urra </h6> </a>
</div>

        </footer>



        )
    }
}