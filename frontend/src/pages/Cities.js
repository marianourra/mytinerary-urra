import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesActions";

class Cities extends React.Component {
  
  componentDidMount() {
    console.log(this.props.getCities())
  }

  render() {

    const { cities, citiesFiltered } = this.props;
    console.log(cities)

    return (
      <>
        <Header />
        <main>
          <div className="ordenar">
            <h2 className="color"> Search your city!</h2>
            <input type="search"
              placeholder="   Search by city name"
              onChange={e => this.props.getFiltered(cities, e.target.value)}
            ></input>

          </div>

          <div>
            {citiesFiltered.length > 0 ? (
              citiesFiltered.map((citi) => {
                const { _id, cityName, country, image } = citi;
                return (
                  <Link to={`/city/${_id}`}>
                    <div
                      className="banners"
                      key={_id}
                      style={{
                        backgroundImage: `URL(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <h3 className="titulocard">{cityName + ", " + country}</h3>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="notfound">
                <h3>Sorry, we don't have results for your search</h3>

              </div>
            )}
          </div>
        </main>
        <Footer />
      </>
    );
  }
}



const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  getFiltered: citiesActions.getFiltered
}

const mapStateToProps = state => {
  return {
      cities: state.cities.allCities,
      citiesFiltered: state.cities.citiesFiltered
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);