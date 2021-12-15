import {useState} from 'react'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import Footer from '../componentes/Footer';
import GoogleLogin from 'react-google-login';


const SignUp = props => {

    const countries = [
        "Afganistán",
        "Albania",
        "Alemania",
        "Andorra",
        "Angola",
        "Antigua y Barbuda",
        "Arabia Saudita",
        "Argelia",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaiyán",
        "Bahamas",
        "Bangladés",
        "Barbados",
        "Baréin",
        "Bélgica",
        "Belice",
        "Benín",
        "Bielorrusia",
        "Birmania",
        "Bolivia",
        "Bosnia y Herzegovina",
        "Botsuana",
        "Brasil",
        "Brunéi",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Bután",
        "Cabo Verde",
        "Camboya",
        "Camerún",
        "Canadá",
        "Catar",
        "Chad",
        "Chile",
        "China",
        "Chipre",
        "Ciudad del Vaticano",
        "Colombia",
        "Comoras",
        "Corea del Norte",
        "Corea del Sur",
        "Costa de Marfil",
        "Costa Rica",
        "Croacia",
        "Cuba",
        "Dinamarca",
        "Dominica",
        "Ecuador",
        "Egipto",
        "El Salvador",
        "Emiratos Árabes Unidos",
        "Eritrea",
        "Eslovaquia",
        "Eslovenia",
        "España",
        "Estados Unidos",
        "Estonia",
        "Etiopía",
        "Filipinas",
        "Finlandia",
        "Fiyi",
        "Francia",
        "Gabón",
        "Gambia",
        "Georgia",
        "Ghana",
        "Granada",
        "Grecia",
        "Guatemala",
        "Guyana",
        "Guinea",
        "Guinea ecuatorial",
        "Guinea-Bisáu",
        "Haití",
        "Honduras",
        "Hungría",
        "India",
        "Indonesia",
        "Irak",
        "Irán",
        "Irlanda",
        "Islandia",
        "Islas Marshall",
        "Islas Salomón",
        "Israel",
        "Italia",
        "Jamaica",
        "Japón",
        "Jordania",
        "Kazajistán",
        "Kenia",
        "Kirguistán",
        "Kiribati",
        "Kuwait",
        "Laos",
        "Lesoto",
        "Letonia",
        "Líbano",
        "Liberia",
        "Libia",
        "Liechtenstein",
        "Lituania",
        "Luxemburgo",
        "Madagascar",
        "Malasia",
        "Malaui",
        "Maldivas",
        "Malí",
        "Malta",
        "Marruecos",
        "Mauricio",
        "Mauritania",
        "México",
        "Micronesia",
        "Moldavia",
        "Mónaco",
        "Mongolia",
        "Montenegro",
        "Mozambique",
        "Namibia",
        "Nauru",
        "Nepal",
        "Nicaragua",
        "Níger",
        "Nigeria",
        "Noruega",
        "Nueva Zelanda",
        "Omán",
        "Países Bajos",
        "Pakistán",
        "Palaos",
        "Palestina",
        "Panamá",
        "Papúa Nueva Guinea",
        "Paraguay",
        "Perú",
        "Polonia",
        "Portugal",
        "Reino Unido",
        "República Centroafricana",
        "República Checa",
        "República de Macedonia",
        "República del Congo",
        "República Democrática del Congo",
        "República Dominicana",
        "República Sudafricana",
        "Ruanda",
        "Rumanía",
        "Rusia",
        "Samoa",
        "San Cristóbal y Nieves",
        "San Marino",
        "San Vicente y las Granadinas",
        "Santa Lucía",
        "Santo Tomé y Príncipe",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leona",
        "Singapur",
        "Siria",
        "Somalia",
        "Sri Lanka",
        "Suazilandia",
        "Sudán",
        "Sudán del Sur",
        "Suecia",
        "Suiza",
        "Surinam",
        "Tailandia",
        "Tanzania",
        "Tayikistán",
        "Timor Oriental",
        "Togo",
        "Tonga",
        "Trinidad y Tobago",
        "Túnez",
        "Turkmenistán",
        "Turquía",
        "Tuvalu",
        "Ucrania",
        "Uganda",
        "Uruguay",
        "Uzbekistán",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Yibuti",
        "Zambia",
        "Zimbabue",
    ];

    const responseGoogle = (response) => {
        console.log(response);

    const googleUser = {
        name: response.profileObj.givenName,
        surname: response.profileObj.familyName, 
        email: response.profileObj.email,
        password: response.profileObj.googleId,
        image_url: response.profileObj.imageUrl,
        country: "",
        google: true,
    }   
    
    props.signUp(googleUser)
      }




    const [newUser, setNewUser] = useState ({

        name: "",
        surname: "", 
        email: "",
        password: "",
        image_url: "",
        country: "",
    })


    const inputHandler = (e) => {
        console.log(e.target.value)
        setNewUser ({
        ...newUser,
        [e.target.name] : e.target.value 

        })

    }

    const submitForm = () => {

        props.signUp(newUser)
    }

    return (

        <>

        <Header />

        <main>
           <h1>Welcome {props.name}</h1>     

           <div className="form">
           <form className="signup">
                <input type="text" onChange={inputHandler} name= "name" placeholder="Name" />
                <input type="text" onChange={inputHandler} name= "surname" placeholder="Surname" />
                <input type="email" onChange={inputHandler} name= "email" placeholder="E-mail" />
                <input type="password" onChange={inputHandler} name= "password" placeholder="Password" />
                <input type="password" onChange={inputHandler} name= "password" placeholder=" Confirm Password" />
                <input type="url" onChange={inputHandler} name= "url" placeholder="Profile picture url" />
                <br />
                <label class="textcolor" for="grade"></label>
                            <br />
                            <select name="country" id="country">
                                <option value="Select an option">Select country</option>
                                {countries.map((country) => {

                                    return (

                                        <option value={country}>{country}</option>

                                    )
                                }
                                )}

                            </select>
                
           </form>
                <button onClick={submitForm}>Sign up</button>

                <GoogleLogin
    clientId="266238118019-1ldlfel51gu67jj7bc4q4vqqk4ke2lue.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

                </div>

                <p> Do you already have an account? <Link to="/signin"><ion-icon name="airplane-outline"></ion-icon>Sign in</Link></p>

        </main>

        <Footer />

        </>

    )

}

const mapStateToProps = (state) => {

    return {

        name: state.users.name

    }
}

const mapDispatchToProps = {

    signUp: userActions.signUp

}

export default connect (mapStateToProps, mapDispatchToProps)(SignUp)