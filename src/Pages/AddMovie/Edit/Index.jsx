import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarTab from "../../../Components/SidebarTab";

const Edit = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start mb-2 mx-auto w-11/12 ">
      {/* Sidebar */}
      <div className="w-full rounded-t-md md:w-1/4">
        <h1 className="hidden md:block font-bold  rounded-t-md h-16 bg-blue-600 py-4 px-4  text-white text-lg">
          Edit
        </h1>
        <div className="w-full h-fit bg-gray-200 p-4">
          <nav>
            <ul className="flex justify-center flex-wrap md:block">
              <SidebarTab to={""} end>
                Primary
              </SidebarTab>
              <SidebarTab to={"movie_cast"}>Movie Cast</SidebarTab>
              <SidebarTab to={"movie_crew"}>Movie Crew</SidebarTab>
              <SidebarTab to={"images"}>Images</SidebarTab>
              <SidebarTab to={"videos"}>Videos</SidebarTab>
            </ul>
          </nav>
        </div>
      </div>
      {/* Content Area */}
      <div className="w-3/4 px-4 mt-4 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Edit;
