import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarTab from "../../../Components/sidebarTab";

const Edit = () => {
  const [activeTab, setActiveTab] = useState("primary");
  return (
    <div className="flex mb-2 mx-auto w-11/12 ">
      {/* Sidebar */}
      <div className="rounded-t-md w-1/4">
        <h1 className="font-bold rounded-t-md h-16 bg-blue-600 py-4 px-4  text-white text-lg">
          Edit
        </h1>
        <div className="w-full h-fit bg-gray-200 p-4">
          <nav>
            <ul>
              <SidebarTab to={"/"}>Primary</SidebarTab>
              <SidebarTab to={"?name=keywords"}>Keywords</SidebarTab>
              <SidebarTab to={"?name=genre"}>Genre</SidebarTab>
              <SidebarTab to={"?name=movieCast"}>Movie Cast</SidebarTab>
              <SidebarTab to={"?name=movieCrew"}>Movie Crew</SidebarTab>
              <SidebarTab to={"?name=images"}>Images</SidebarTab>
              <SidebarTab to={"?name=video"}>Videos</SidebarTab>
            </ul>
          </nav>
        </div>
      </div>
      {/* Content Area */}
      <div className="w-3/4 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Edit;
