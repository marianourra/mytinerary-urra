import React from 'react'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


export default class Cities extends React.Component {
    
    state = {
        cities: [],
        citiesFiltred: []
    }
    componentDidMount() {
        fetch("http://localhost:4000/api/cities")
            .then(res => res.json())
            .then(data => {
                this.setState({cities: data.response, citiesFiltred: data.response})
            })
            .catch(err => console.error(err))

    }
    searchHandler = (e) => {

            const searchValue = e.target.value.toLowerCase().trim();
            console.log(searchValue)
            let filtred = [];
            filtred = this.state.cities.filter(place => {
                const city = place.cityName.toLowerCase().trim()
                return city.startsWith(searchValue)
            }) 
            this.setState({citiesFiltred: filtred})
            console.log(this.state.citiesFiltred)
            // console.log(this.state.cities)
        }
    render() {

        const {cities, citiesFiltred} = this.state

        return (
            <>
                <Header/>
                <main>
                    <div className="generalCity">
                      <h2>Search your next trip!</h2>
                        <div>
                            <input type="search" placeholder="Search your city!" onChange={this.searchHandler}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Cities</h2>

                                {   
                                    citiesFiltred.length > 0 
                                    ?
                                    citiesFiltred.map(citi => {
                                        const { _id, cityName, country, image} = citi
                                        return (
                                                <Link to={`/city/${_id}`} className="w-100 mb-2">
                                            <div className="cities-img col-10 col-lg-5 mb-4 me-2 ms-2" key={_id} style={{backgroundImage: `URL(${image})`, backgroundSize: 'cover'}} >
                                                    <h3 className="w-100">{cityName + " - " + country}</h3>
                                                    <Button variant="warning" className="more-info">More Info</Button>
                                            </div>
                                                </Link> 
                                        )
                                        })
                                    :
                                    <div className="not-found">
                                        <h3>City not found</h3>
                                    </div>
                                }
                        </div>
                    </div>
                </main>
                <Footer/>
            </>
        )
    }
}