import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Movies from "./Pages/Movies";
import Layout from "./Layout/Layout";
import MovieDetails from "./MovieCard/MovieCard";
import Cast from "./Cast/Cast";

const App = () => {
  return (
   
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='movies/:movieId' element={<MovieDetails/>}>
          <Route path='cast'element={<Cast />}/>
        </Route>
        </Route>/
      </Routes>
 
  );
};

export default App;