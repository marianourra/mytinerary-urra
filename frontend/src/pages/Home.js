import React from 'react';
import Header from '../componentes/Header'
import Hero from '../componentes/Hero';
import Carrusel from '../componentes/Carrusel';
import Footer from '../componentes/Footer'


export default class Home extends React.Component {
  
  render() {
  
 
   return (

    <div className="divHome">

    
  <   div className="header">
      <Header />
      </div> 


      <div className="hero">
      <Hero />
      </div> 

      <div className="carousel">
      <Carrusel />
      </div> 

     <div className="footer">
     <Footer />
     </div>  

   </div>

   )

}}
