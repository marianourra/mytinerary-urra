import React, {useEffect, useState} from 'react';
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import { Card } from 'react-bootstrap'

function Cities () {
  
  const [cities, setCities] = useState ([])
  
  useEffect(()=>{
      fetch("http://localhost:4000/api/cities")
      .then(res => res.json())
      .then(data => setCities(data.response.cities))
      .catch(err => console.error(err.message))  
  },[])


   return (

    <div>

  <Header/>
    
<div className="fondocities">

 {cities.map(city => 
 
 <figure>
     <Card className="cardform bg-transparent text-white">
       <Card.Img src={city.image} alt={city.city} />
       <Card.ImgOverlay>
         <h3>{city.city}</h3>
         <p>{city.country}</p>
         {/* <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </Card.Text> */}
       </Card.ImgOverlay>
     </Card>
   </figure>

)} 

</div>

    <Footer />
   
   </div>

   )
}

export default Cities

