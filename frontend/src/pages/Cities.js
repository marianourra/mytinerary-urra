import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default class Cities extends React.Component {
  state = {
    cities: [],
    citiesFiltred: [],
  };
  componentDidMount() {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cities: data.response, citiesFiltred: data.response });
      })
      .catch((err) => console.error(err));
  }
  searchHandler = (e) => {
    const searchValue = e.target.value.toLowerCase().trim();
    console.log(searchValue);
    let filtred = [];
    filtred = this.state.cities.filter((place) => {
      const city = place.cityName.toLowerCase().trim();
      return city.startsWith(searchValue);
    });
    this.setState({ citiesFiltred: filtred });
    console.log(this.state.citiesFiltred);
    // console.log(this.state.cities)
  };
  render() {
    const { cities, citiesFiltred } = this.state;

    return (
      <>
        <Header />
        <main>
          <div className="ordenar">
            <h2 className="color"> Search your city!</h2>
            <input
              type="search"
              placeholder="   Search by city name"
              onChange={this.searchHandler}
            ></input>

          </div>

          <div>
            {citiesFiltred.length > 0 ? (
              citiesFiltred.map((citi) => {
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
