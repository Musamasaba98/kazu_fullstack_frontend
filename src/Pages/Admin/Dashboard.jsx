import React from "react";
import SidePannel from "./SidePannel";
import Index from "./Index";

const Dashboard = () => {
  return (
    <div className="flex mt-[-0.8rem]">
      <div>
        <SidePannel />
      </div>
      <div className="flex flex-wrap">
        <Index />
      </div>
    </div>
  );
};

export default Dashboard;
