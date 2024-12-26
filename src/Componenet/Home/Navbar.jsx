import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate() 
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
          to="/wishlist"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black"
          }
        >
          <p className="p-1">Wishlist</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/feature"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black"
          }
        >
          <p className="p-1">Featured</p>
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-white sticky top-0 z-10">
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
     {user ? (
          <div className="flex items-center justify-center gap-2  z-50">
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              data-tooltip-place="top"
              className="w-10 h-10 rounded-full object-cover "
              src={user?.photoURL}
              alt="user"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => {
                logOut();
                navigate("/");
              }}
              className="btn border-blue-300 dark:text-black dark:bg-gray-300
              "
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <Link
              to="/auth/login"
              className="btn border-blue-300 dark:text-black dark:bg-gray-300"
            >
              Login
            </Link>
            <Link
              to="/auth/signUp"
              className="btn border-blue-300 dark:text-black dark:bg-gray-300"
            >
              Registration
            </Link>
          </div>
        )}
     </div>
    </div>
  );
}
