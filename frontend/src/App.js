import React, { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from './pages/Cities'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import CitySinProps from "./pages/City";
import withRouter from "./utils/withRouter";
import {connect} from "react-redux";
import userActions from "./redux/actions/userActions";


const City = withRouter(CitySinProps)

const App = (props) => {

  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.logInLS(localStorage.getItem("token"))
    }

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cities" element={<Cities />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};


const mapStateToProps = (state) => {

  return {

      token: state.users.token

  }
}

const mapDispatchToProps = {

  logInLS: userActions.logInLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
