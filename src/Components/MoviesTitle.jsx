import React from "react";

const MoviesTitle = (props) => {
  return (
    <div
      className="text-xl md:text-2xl
      text-gray-400
      font-bold
      uppercase
      mx-0
      mb-8
      "
    >
      {props.children}
    </div>
  );
};

export default MoviesTitle;
