
import React from "react";
import './../styles/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation";
import About from "./About";
import Home from "./Home";


const App = () => {
  return (
    <Router>
    <div>
      <Navigation/>
        {/* Do not remove the main div */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About /> }/>
        </Routes>
    </div>
    </Router>
  )
}

export default App
