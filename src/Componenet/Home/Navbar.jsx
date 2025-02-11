// import React, { useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
// import toast from "react-hot-toast";

// export default function Navbar() {
//   const { user, logOut  } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const listItem = (
//     <div className="flex flex-col items-center lg:flex-row gap-2 text-[17px]   nunito-font font-semibold ">
     
//         <NavLink to="/" className={({ isActive }) =>
//           `p-1 hover:text-[#4aa0fdda] ${
//             isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
//           }`
//         }>
//           <p className="p-1 nunito-font">Home</p>
//         </NavLink>
 
//         <NavLink to="/blogs" className={({ isActive }) =>
//           `p-1 hover:text-[#4aa0fdda] ${
//             isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
//           }`
//         }>
//           <p className="p-1 nunito-font">All Blog</p>
//         </NavLink>

//     {user &&     <NavLink
//           to="/add-blog"
//           className={({ isActive }) =>
//             `p-1 hover:text-[#4aa0fdda] ${
//               isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
//             }`
//           }>
//           <p className="p-1 nunito-font">Add Blog</p>
//         </NavLink>}

//        {user &&  <NavLink
//           to="/wishlist"
//           className={({ isActive }) =>
//             `p-1 hover:text-[#4aa0fdda] ${
//               isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
//             }`
//           }>
//           <p className="p-1 nunito-font">Wishlist</p>
//         </NavLink>}
  
//        <NavLink
//           to="/feature"
//           className={({ isActive }) =>
//             `p-1 hover:text-[#4aa0fdda] ${
//               isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
//             }`
//           }>
//           <p className="p-1 nunito-font">Featured</p>
//         </NavLink>

//     </div>
//   );
//   return (
//     <div className="navbar bg-[#111111] text-[#DDDDDD] sticky top-0 z-10">
//       <div className="w-full mx-auto container">
//         {" "}
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-black z-[1] mt-3 w-52  shadow rounded-b-md"
//             >
//               {listItem}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">Pathz</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{listItem}</ul>
//         </div>
//         <div className="navbar-end">
//           {user ? (
//             <div className="flex items-center justify-end gap-2  z-50">
//               <img
//                 data-tooltip-id="my-tooltip"
//                 data-tooltip-content={user.displayName}
//                 data-tooltip-place="top"
//                 className="w-11 h-11 rounded-full object-cover "
//                 src={user?.photoURL}
//                 alt="user"
//                 referrerPolicy="no-referrer"
//               />
//               <div
//                 onClick={() => {
//                   logOut();
//                   toast.success("Succesfully Logout !")
//                   navigate("/");
//                 }}
               
//               >
//                 <span className="block cursor-pointer bg-[#007BFF] /80 px-6 py-2 text-[17px] font-medium group-hover:bg-transparent">
//                   Logout
//                 </span>
//               </div>
//             </div>
//           ) : (
//             <div className="flex gap-2 items-center justify-end">
//               <Link
//                 to="/auth/login"
//                 className="block cursor-pointer bg-[#007BFF] /80 px-6 py-2 text-[17px] font-medium group-hover:bg-transparent"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/auth/signUp"
//                 className="block cursor-pointer bg-[#007BFF] /80 px-6 py-2 text-[17px] font-medium group-hover:bg-transparent"
//               >
//                 Registration
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const listItem = (
    <div className="flex flex-col items-center lg:flex-row gap-2 text-[17px]   nunito-font font-semibold ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `p-1 hover:text-[#4aa0fdda] ${
            isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
          }`
        }
      >
        <p className="p-1 nunito-font">Home</p>
      </NavLink>

      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          `p-1 hover:text-[#4aa0fdda] ${
            isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
          }`
        }
      >
        <p className="p-1 nunito-font">All Blog</p>
      </NavLink>

      {user && (
        <NavLink
          to="/add-blog"
          className={({ isActive }) =>
            `p-1 hover:text-[#4aa0fdda] ${
              isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
            }`
          }
        >
          <p className="p-1 nunito-font">Add Blog</p>
        </NavLink>
      )}

      {user && (
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `p-1 hover:text-[#4aa0fdda] ${
              isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
            }`
          }
        >
          <p className="p-1 nunito-font">Wishlist</p>
        </NavLink>
      )}

      <NavLink
        to="/feature"
        className={({ isActive }) =>
          `p-1 hover:text-[#4aa0fdda] ${
            isActive ? "text-[#228dff] text-[18px]" : "text-[#adadad]"
          }`
        }
      >
        <p className="p-1 nunito-font">Featured</p>
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-[#111111] text-[#DDDDDD] sticky top-0 z-10">
      <div className="w-full mx-auto container">
        {" "}
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
              className="menu dropdown-content bg-[#111111] z-[1] mt-3 w-[98vw] shadow rounded-b-md"
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
            <div className="flex items-center justify-end gap-2  z-50">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="top"
                className="w-11 h-11 rounded-full object-cover "
                src={user?.photoURL}
                alt="user"
                referrerPolicy="no-referrer"
              />
              <div
                onClick={() => {
                  logOut();
                  toast.success("Succesfully Logout !");
                  navigate("/");
                }}
              >
                <span className="block cursor-pointer bg-[#007BFF] /80 px-6 py-2 text-[17px] font-medium group-hover:bg-transparent">
                  Logout
                </span>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 items-center justify-end">
              <Link
                to="/auth/login"
                className="block cursor-pointer bg-[#007BFF] /80 px-6 py-2 text-[17px] font-medium group-hover:bg-transparent"
              >
                Login
              </Link>
              <Link
                to="/auth/signUp"
                className="block cursor-pointer bg-[#007BFF] /80 px-6 py-2 text-[17px] font-medium group-hover:bg-transparent"
              >
                Registration
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}