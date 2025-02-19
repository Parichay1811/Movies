import React from "react";
import "../App.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ backgroundImage: `url(${movie.background})` }}>
      <div className="movie-content">
        <img src={movie.poster} alt={`${movie.title} poster`} className="movie-poster" />
        <div className="movie-details">
          <h2>{movie.title}</h2>
          <p className="movie-meta">
            {movie.year}, <span>{movie.director}</span>
          </p>
          <div className="movie-info">
            <span className="duration">{movie.duration}</span>
            <span>{movie.genres.join(", ")}</span>
          </div>
          <p className="description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;