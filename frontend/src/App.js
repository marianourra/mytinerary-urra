import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from './pages/Cities'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import CitySinProps from "./pages/City";
import withRouter from "./utils/withRouter";

const City = withRouter(CitySinProps)

const App = () => {
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

export default App;
