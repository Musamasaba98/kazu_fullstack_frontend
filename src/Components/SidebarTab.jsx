import React from "react";
import { NavLink } from "react-router-dom";

const SidebarTab = ({ children, ...attributes }) => {
  return (
    <li className="pb-3">
      <NavLink
        {...attributes}
        className={`cursor-pointer mb-2 hover:text-blue-500 transition-all`}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default SidebarTab;
