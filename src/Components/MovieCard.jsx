import React from "react";
import { FaStar, FaPlayCircle } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div className=" md:w-2/5 sm:w-3/5 xs:w-4/5  rounded-lg overflow-hidden mt-28 xs:ml-5 md:ml-10">
      <div className="px-6 py-4">
        <div className="font-extrabold text-5xl text-white">{movie.title}</div>
        <p className="text-gray-400 mt-2 py-4 font-medium">{`${movie.overview.slice(
          0,
          200
        )}...`}</p>
        <div className="mt-auto">
          <FaPlayCircle className="text-white hover:text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
