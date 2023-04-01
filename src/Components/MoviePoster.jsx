import React from "react";
import { Link } from "react-router-dom";
import noImage from "../assets/images/noImage.png";

const MoviePoster = ({ movie }) => {
  return (
    <div className="mt-2 w-28 md:w-48  mx-auto transition-all hover:scale-125">
      <Link to={`/movies/${movie.id}`}>
        {movie.imageUrl === null ? (
          <img
            className="w-full sm:w-[calc(100%)]  md:w-4/5 lg:w-full"
            src={noImage}
            alt={movie.title}
          />
        ) : (
          <img
            className="w-full sm:w-[calc(100%)]  md:w-4/5 lg:w-full"
            src={movie.coverUrl}
            alt={movie.title}
          />
        )}
      </Link>
    </div>
  );
};

export default MoviePoster;
