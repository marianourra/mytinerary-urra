import React from 'react'
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"



import Itineraries from '../componentes/Itineraries';

class City extends React.Component {

  id = this.props.params.id


  componentDidMount() {
    this.props.getCities()
    this.props.getOneCity(this.id);
    this.props.getItinerariesByCity(this.id)


  }

  render() {

    const { city, itineraries } = this.props


    return (

      <div>



        <Header />

        <main>

          <div className="cityHero" style={{
            backgroundImage: `url(${city.image})`,
            backgroundSize: "cover"
          }} >
            <h3 className="formato">{city.cityName}</h3>
            <p className="pais">{city.country}</p>
          </div>

          <div className="iti">
            <h2 className="iti italic mb-3">Itineraries</h2>
          </div>




          {itineraries.length > 0 ?

            itineraries.map(itinerarie => {

              return (
                <Itineraries itinerarie={itinerarie} />

              )

            })

            : <h2>There are no itineraries available</h2>
          }

        </main>

        <Link to={`/cities`}>
          <button className="back"> Back to Cities </button>
        </Link>

        <Footer />




      </div>

    )

  }
}

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  getItinerariesByCity: itinerariesActions.getItinerariesByCity,
  getOneCity: citiesActions.getOneCity,

}

const mapStateToProps = state => {
  return {
    cities: state.cities.allCities,
    itineraries: state.itineraries.itineraries,
    city: state.cities.oneCity

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);