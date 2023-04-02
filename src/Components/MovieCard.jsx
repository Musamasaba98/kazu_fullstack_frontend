import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Button from "./Button";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { myListActions } from "../Store/features/myListSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const { itemList } = useSelector((state) => state.myList);
  const added = itemList?.find((item) => item.id === movie.id);

  const { addToMyList, removeFromMyList } = myListActions;
  const handleAddMovie = () => {
    dispatch(addToMyList(movie));
  };
  const handleRemoveMovie = () => {
    dispatch(removeFromMyList(movie.id));
  };
  return (
    <div className="container md:pt-5 px-6 py-4 pt-44 lg:pt-0 2xl:ml-44  w-full  md:w-1/2  md:mt-28 lg:mt-44 xs:ml-5 md:ml-10">
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
        <Button onClick={!added ? handleAddMovie : handleRemoveMovie}>
          {!added ? (
            <BsPlusLg
              size={20}
              className="text-black hover:text-yellow-400 mr-2"
            />
          ) : (
            <BsDashLg
              size={20}
              className="text-black hover:text-yellow-400 mr-2"
            />
          )}
          My List
        </Button>
        <Link to={"edit"}>
          <Button>
            <CiEdit
              size={25}
              className="text-black hover:text-yellow-400 mr-2"
            />
            EDIT
          </Button>
        </Link>
      </div>
      <p className="text-gray-400 my-3 py-4 font-medium">{`${movie.description}`}</p>
    </div>
  );
};

export default MovieCard;
