import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Business from "./pages/Business";
import Result from "./pages/Result";
import About from "./pages/About";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='business' element={<Business />} />
        <Route path='result/:id' element={<Result />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
