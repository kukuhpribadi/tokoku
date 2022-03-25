import React from "react";
import { links } from "../utils/constants";
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useAppContext } from "../context/app_context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isSidebarOpen, sidebarToggle } = useAppContext();
  return (
    <div className="bg-gray-100 shadow h-16 flex justify-between items-center px-3 lg:px-32 fixed z-50 w-full">
      <Link to="/">
        <div className="text-2xl uppercase font-extrabold select-none">
          tokoku
        </div>
      </Link>
      <div className="hidden lg:block">
        <ul className="flex gap-x-10">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li className="cursor-pointer capitalize select-none" key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden lg:flex gap-x-5">
        <div>
          <FiSearch />
        </div>
        <div>
          <FiShoppingCart />
        </div>
        <div>
          <FiUser />
        </div>
      </div>
      <div
        className="block lg:hidden text-2xl cursor-pointer"
        onClick={sidebarToggle}
      >
        {isSidebarOpen ? <FiX /> : <FiMenu />}
      </div>
    </div>
  );
};

export default Navbar;
