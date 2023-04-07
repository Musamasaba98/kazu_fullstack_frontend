import React from "react";
import SidePannel from "./SidePannel";

const Dashboard = () => {
  return (
    <div className="flex mt-[-0.8rem]">
      <div>
        <SidePannel />
      </div>
      <div className="flex flex-wrap text-white">
        <div className="w-1/2">Child Component 1</div>
        <div className="w-1/2">Child Component 2</div>
        <div className="w-1/3">Child Component 3</div>
        <div className="w-2/3">Child Component 4</div>
      </div>
    </div>
  );
};

export default Dashboard;
