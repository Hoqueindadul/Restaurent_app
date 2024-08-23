import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Menu from "./components/Menu";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";

import { AuthProvider } from './context/AuthContext';
import './App.css'
const App = () => {
  return (
   
      <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
      </AuthProvider>
  
    
  );
};

export default App;
