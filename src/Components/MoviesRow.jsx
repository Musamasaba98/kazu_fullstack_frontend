import React from "react";

const MoviesRow = ({ children }) => {
  return <div className="flex overflow-x-auto mt-4 p-4">{...children}</div>;
};

export default MoviesRow;
