import React from "react";

const MoviePoster = ({ movie }) => {
  return (
    <div className="m-2 w-40 transition-all hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.name}
      />
    </div>
  );
};

export default MoviePoster;
