import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import BusiList from "./business/BusiList";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='business' element={<BusiList />} />
      </Routes>
    </div>
  );
}

export default App;
