import React from "react";
import movies from "./data/movies"

import "./App.css";
import MovieCard from "./components/Card/MovieCards";

const App = () => {
  return (
    <div className="app">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie}/>
        
      ))}
    </div>
  );
};

export default App;