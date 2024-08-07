import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import {BsSearch} from "react-icons/bs"

const Header = () => {
  return (
    <div className="px-12 z-10 absolute h-20 bg-transparent flex justify-between items-center w-full mt-2">

      <img src={Logo} className="w-40" />

      <div className="flex gap-12 text-xl font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "text-white" : "text-zinc-500"}`
          }
        >
          <button>Home</button>
        </NavLink>
        <NavLink
          to="/popular"
          className={({ isActive }) =>
            ` ${isActive ? "text-white" : "text-zinc-500"}`
          }
        >
          <button>Popular</button>
        </NavLink>
        <NavLink
          to="/upcoming"
          className={({ isActive }) =>
            ` ${isActive ? "text-white" : "text-zinc-500"}`
          }
        >
          <button>Upcoming</button>
        </NavLink>
      </div>

      <form className="flex items-center relative w-60">
        <input 
        className="outline-none py-2 px-3 bg-opacity-20 bg-zinc-300 text-zinc-300 placeholder-zinc-300
        rounded border-zinc-700 focus:border-zinc-600 border-2 w-full
        "
        placeholder="Search for movies....." />
        <BsSearch className="text-white text-xl absolute right-3"/>
      </form>
    </div>
  );
};

export default Header;
