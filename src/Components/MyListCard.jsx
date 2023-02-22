import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { myListActions } from "../Store/myListSlice";
import Button from "./Button";

const MyListCard = ({ item }) => {
  const dispatch = useDispatch();
  const { removeFromMyList } = myListActions;
  const handleRemoveMovie = () => {
    dispatch(removeFromMyList(item.id));
  };
  return (
    <div className="flex justify-between text-white item-center my-3">
      <div className="flex lg:text-xl text-sm gap-2 md:gap-10 justify-between item-center w-1/2">
        <Link to={`/movies/${item.id}`}>
          <div className=" text-white flex gap-5 w-full md:gap-10 mb-5">
            {
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.title}
                className="h-20"
              />
            }
            <span className="text-white">{item.title}</span>
          </div>
        </Link>
        <div className="hidden md:inline-block">
          <p>Released: {item.release_date}</p>
        </div>
      </div>
      <div className="ml-10">
        <Button
          className="w-20 cursor-pointer mr-2 bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-1 px-2 inline-flex items-center"
          onClick={handleRemoveMovie}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default MyListCard;
