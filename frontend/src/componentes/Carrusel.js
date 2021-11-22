import React from 'react';
import { Carousel } from 'react-bootstrap'


function Carrusel() {

  const cities = [
    {
      name: 'Hong Kong',
      image: "./assets/hongkong.jpg"
    },
    {
      name: 'Kuala Lumpur',
      image: "./assets/kuala.jpg"
    },
    {
      name: 'London',
      image: "./assets/london.jpg"
    },
    {
      name: 'Macao',
      image: "./assets/macao.jpg"
    },
  ];

  const cities2 = [
    {
      name: 'Nueva York',
      image: "./assets/ny.jpg"
    },
    {
      name: 'Paris',
      image: "./assets/paris.jpg"
    },
    {
      name: 'Singapur',
      image: "./assets/singapur.jpg"
    },
    {
      name: 'Tulum',
      image: "./assets/tulum.jpg"
    },
  ];

  const cities3 = [
    {
      name: 'Buenos Aires',
      image: "./assets/bsas.jpg"
    },
    {
      name: 'Bangkok',
      image: "./assets/bangkok.jpg"
    },
    {
      name: 'Dubai',
      image: "./assets/dubai.jpg"
    },
    {
      name: 'Estambul',
      image: "./assets/estambul.jpg"
    },
  ];

  return (

    <div className="container-fluid">

      <h2> Popular MyTineraries! </h2> 
    <Carousel>
      <Carousel.Item interval={1000}>

        <div className="row justify-content-center">

        { cities.map((city) => {

          return (

            <div className="cardCountry col-6 col-md-6">
              
              <figure>
                
                <img src={city.image} alt={city.name} />
                
                <div className="layer center">
                  
                  <h3 className="text-city">{city.name}</h3>
               
                </div>
              
              </figure>

            </div> 
            )
          })}  
          </div>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        { cities2.map((city) => {

          return (

            <div className="cardCountry">
              <figure>
                <img src={city.image} alt={city.name} />
                <div className="layer center">
                  <h3 className="text-city">{city.name}</h3>
                </div>
              </figure>
            </div> 
            )
          })}
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        { cities3.map((city) => {

          return (

            <div className="cardCountry p-2">
              <figure>
                <img src={city.image} alt={city.name} />
                <div className="layer center">
                  <h3 className="text-city">{city.name}</h3>
                </div>
              </figure>
            </div> 
            )
          })}
      </Carousel.Item>
    </Carousel>
    </div>

    )
}

export default Carrusel