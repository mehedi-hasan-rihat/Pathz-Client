import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const listItem = (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
      <li className="">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black"
          }
        >
          <p className="p-1">Home</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black"
          }
        >
          <p className="p-1">All Blog</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/add-blog"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black"
          }
        >
          <p className="p-1">Add Blog</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/blog/5456"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black"
          }
        >
          <p className="p-1">My Reviews</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/Update"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black"
          }
        >
          <p className="p-1">Update</p>
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-white sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {listItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Pathz</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{listItem}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}
