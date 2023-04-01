import React from "react";
import { Outlet } from "react-router-dom";

const Primary = () => {
  return (
    <div>
      <h3>Edit Movie</h3>
      <Outlet />
    </div>
  );
};

export default Primary;
