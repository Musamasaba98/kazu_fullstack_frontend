import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Button from "./Button";
import { BsPlusLg } from "react-icons/bs";

const MovieCard = ({ movie }) => {
  return (
    <div className=" md:pt-5 lg:pt-0  md:mt-28 lg:mt-44 xs:ml-5 md:ml-10">
      <div className="px-6 py-4 pt-44 lg:pt-0 md:mt-0 w-full md:w-1/2">
        <div className="font-extrabold text-4xl text-white mb-6">
          {movie.title}
        </div>

        <div className="flex mt-auto">
          <Button>
            <FaPlayCircle
              size={25}
              className="text-black hover:text-yellow-400 mr-2"
            />
            Play
          </Button>
          <Button>
            <BsPlusLg
              size={20}
              className="text-black hover:text-yellow-400 mr-2"
            />
            My List
          </Button>
        </div>
        <p className="text-gray-400 my-3 py-4 font-medium">{`${movie.overview.slice(
          0,
          300
        )}...`}</p>
      </div>
    </div>
  );
};

export default MovieCard;
