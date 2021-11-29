import React from 'react'
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class City extends React.Component {
  
      constructor(props) {
      super (props)
      console.log(props)
    }

    state = {
      city: {}
    }

    id=this.props.params.id

    componentDidMount() {
    axios.get("http://localhost:4000/api/cities/" + this.id)
    .then(res => this.setState({city: res.data.response}))
    
    }
    
    render() {
    
    const city = this.state.city
      
     return (
  
      <div>
  
  
  
        <Header />

<main>

<div className="cityHero" style={{
     backgroundImage: `url(${city.image})`,
     backgroundSize: "cover"}} > 
     <h3>{city.cityName}</h3>
     <p>{city.country}</p>
    <Link to={ `/cities`}>Back to Cities  </Link>
</div>

</main>

<button>
<Link to={`/cities`}>Back to Cities  </Link>
</button>

       <Footer />
  
  


     </div>
  
     )
  
  }}