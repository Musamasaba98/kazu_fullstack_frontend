import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className="cursor-pointer
    font-bold
    rounded
    px-8
    flex
    items-center
    py-2
    hover:text-black
    transition-all
    mr-2 bg-gray-800 text-white hover:bg-white"
    >
      {children}
    </button>
  );
};

export default Button;
