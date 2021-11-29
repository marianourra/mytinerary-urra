import React, {useEffect, useState} from 'react';
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import axios from 'axios';

function Cities () {
  
  const [cities, setCities] = useState ([])
  
  useEffect(()=>{
      axios ("http://localhost:4000/api/cities")
      .then(res => (res.data))
      .then(data => setCities(data.response.cities))
      .catch(err => console.error(err.message))  
  },[])


   return (

    <div>

  <Header/>
    
<div className="fondocities">

 {cities.map(city => 
 
 <figure>
 <img alt="foto" style={{
     backgroundImage: `url(${city.image})`,
     backgroundSize: "cover"}} />
         <h3>{city.city}</h3>
         <p>{city.country}</p>
         {/* <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </Card.Text> */}

   </figure>

)} 

</div>

    <Footer />
   
   </div>

   )
}

export default Cities

