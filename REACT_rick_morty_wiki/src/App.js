import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import Home from "./components/Home/Home";
import CardDetails from "./components/Card/CardDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
