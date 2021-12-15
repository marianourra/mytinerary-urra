import {useState} from "react";
import userActions from '../redux/actions/userActions'
import {connect} from 'react-redux'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import GoogleLogin from 'react-google-login';

const SignIn = (props) => {

    

    const [signUser, setSignUser] = useState ({
        
        email: "",
        password: "",
    })


    const inputHandler = (e) => {

        setSignUser({
            ...signUser,
            [e.target.name]: e.target.value
        })
    }

    const responseGoogle =  res => {
        let logGoogleUser = {
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            googleFlag: true
        }
        props.signIn(logGoogleUser)
    }


    const submitForm = () => {

      console.log(signUser)      
      props.signIn(signUser)
    }

    return (

    <>

        <Header />

        <main>
           <h1>Welcome {props.name}</h1>     

           <div className="form">
                <form className="signup">
                        <input type="email" onChange={inputHandler} name= "email" placeholder="E-mail" />
                        <input type="password" onChange={inputHandler} name= "password" placeholder="Password" />
                </form>
                        
                <button onClick={submitForm}>Sign in</button>
                <GoogleLogin
    clientId="266238118019-1ldlfel51gu67jj7bc4q4vqqk4ke2lue.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
                
            </div>
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
    signIn: userActions.signIn
}

export default connect (mapStateToProps, mapDispatchToProps) (SignIn)
