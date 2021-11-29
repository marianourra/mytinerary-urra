import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from './pages/Cities'
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
