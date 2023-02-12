import React from "react";

const HomeSmallCard = ({ title, image, rating, genre, description }) => {
  return (
    <div className="relative w-64 h-64 bg-gray-800 rounded-lg shadow-lg m-4">
      <img src={image} alt={title} className="w-full h-56 rounded-t-lg" />
      <div className="absolute p-4 top-14">
        <h2 className="text-lg font-medium text-gray-100">{title}</h2>
        <div className="flex items-center mt-2">
          <span className="bg-gray-600 rounded-full px-3 py-1 text-sm font-medium text-gray-100">
            {rating}
          </span>
          <span className="ml-2 text-gray-400 text-sm">{genre}</span>
        </div>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HomeSmallCard;
