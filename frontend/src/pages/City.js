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

    id=this.props.params.id

    componentDidMount() {
    axios.get("http://localhost:4000/api/cities/" + this.id)
    .then(res => console.log(res.data.response))
    
    }
    
    render() {
    
        
     return (
  
      <div>
  
  
  
        <Header />

<main>


</main>


<Link to={`/cities`}>Clik aqui  </Link>

       <Footer />
  
  


     </div>
  
     )
  
  }}