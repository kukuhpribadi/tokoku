import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/app_context";
import { links } from "../utils/constants";

const Sidebar = () => {
  const { isSidebarOpen, sidebarToggle } = useAppContext();

  return (
    <div
      className={`h-screen bg-gray-100 w-96 fixed ${
        isSidebarOpen ? "right-0" : "-right-96"
      }  z-30 transition-all duration-500`}
    >
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <Link to={url}>
            <div
              key={id}
              className="uppercase text-center py-5 border-b border-gray-700 cursor-pointer"
              onClick={sidebarToggle}
            >
              {text}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
