import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Menu from "./components/Menu";
import Signup from "./components/Signup";
import './App.css'
import Contact from "./components/Contact";
// hello how
// dfjlasjd
const App = () => {
  return (
    <>
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </BrowserRouter>
    </>
    
  );
};

export default App;
