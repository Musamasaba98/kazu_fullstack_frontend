import React from "react";

const Button = ({ children, ...attributes }) => {
  return (
    <button
      className="cursor-pointer
mr-2
    bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
      {...attributes}
    >
      {children}
    </button>
  );
};

export default Button;
