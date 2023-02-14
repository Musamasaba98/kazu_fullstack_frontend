import React from "react";
import { Link } from "react-router-dom";

const MoviePoster = ({ movie }) => {
  return (
    <div className="mt-2 w-28 md:w-48  mx-auto transition-all hover:scale-125">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="w-full sm:w-[calc(100%)]  md:w-4/5 lg:w-full"
          src={`https://image.tmdb.org/t/p/w300${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={movie.name}
        />
      </Link>
    </div>
  );
};

export default MoviePoster;
