import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from './pages/Cities'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cities" element={<Cities />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
