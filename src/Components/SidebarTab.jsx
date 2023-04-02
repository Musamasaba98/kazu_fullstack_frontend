import React from "react";
import { NavLink } from "react-router-dom";

const SidebarTab = ({ children, ...attributes }) => {
  return (
    <li className="pb-3">
      <NavLink
        {...attributes}
        className={`cursor-pointer mb-8 transition-all py-2 px-4 ${({
          isActive,
          isPending,
        }) => {
          isActive ? "active" : isPending ? "pending" : "";
        }}`}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default SidebarTab;
