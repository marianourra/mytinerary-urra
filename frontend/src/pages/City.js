import React from 'react'
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'
import axios from 'axios';


export default class City extends React.Component {
  
    constructor(props) {
      super (props)
      console.log(props)
    }

    componentDidMount() {
    axios ("http://localhost:4000/api/cities")
    .then(res => (res.data))
    }
    
    render() {
    
        
     return (
  
      <div>
  
  
  
        <Header />

  
       <Footer />
  
  
     </div>
  
     )
  
  }}