import React, {useEffect, useState} from 'react';
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Cities () {
  
  const [cities, setCities] = useState([])
  
  useEffect(()=>{
      axios.get("http://localhost:4000/api/cities")
      .then(data => setCities(data.data.response))
      .catch(err => console.error(err.message))  
  },[])


   return (

    <div>

  <Header/>
    
<div className="fondocities">

 {cities.map(city => 
 
 <figure>
 <img alt={city.city} style={{
     backgroundImage: `url(${city.image})`,
     backgroundSize: "cover"}} />
         <h3>{city.city}</h3>
         <p>{city.country}</p>
         {/* <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </Card.Text> */}

<Link to={`/city/${city._id}`}>Clik aqui  </Link>

   </figure>

)} 

</div>

    <Footer />
   
   </div>

   )
}

export default Cities

