import {useState} from "react";
import userActions from '../redux/actions/userActions'
import {connect} from 'react-redux'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer'

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
