import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Business from "./pages/Business";
import Result from "./pages/Result";
import About from "./pages/About";
import BusinessNew from "./pages/BusinessNew";
import Diagnosis from "./pages/Diagnosis";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/business' element={<Business />} />
        <Route path='/business/new' element={<BusinessNew />} />
        <Route path='/result/:id' element={<Result />} />
        <Route path='/about' element={<About />} />
        <Route path='/diagnosis/:id' element={<Diagnosis />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
