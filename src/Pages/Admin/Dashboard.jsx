import React from "react";
import SidePannel from "./SidePannel";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex relative mt-[-0.8rem]">
      <div>
        <SidePannel />
      </div>
      <div className="flex flex-wrap">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
