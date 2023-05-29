import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Movies from "./Pages/Movies";
import Layout from "./Layout/Layout";

const App = () => {
  return (
   
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='movies' element={<Movies/>}/>
        </Route>/
      </Routes>
 
  );
};

export default App;