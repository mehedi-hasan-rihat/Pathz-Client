import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import Loader from "../Componenet/Loader";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

export default function FeaturedPage() {
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const {
    data: wishList,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["wishList"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/wishlist?email=${user.email}`
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isSuccess) {
    console.log(wishList);
  }

  if (isError) {
    return (
      <div
        className="text-red-500 flex justify-center items-center my-24
    "
      >
        Error: {error.message}
      </div>
    );
  }

  return (
   <div className="">
      <h1 className=" text-2xl font-medium text-gray-800 text-center py-20 bg-slate-100 mb-3">
        Wishlisted Blogs
      </h1>
     <div className="overflow-x-auto my-16 rounded-xl text-sm sm:text-md min-h-[calc(100vh-500px)] px-2">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-[#60A5FA] text-white">
          <tr className="text-center">
            <th className="p-4">#</th>
            <th className="p-4">Title</th>
            <th className="p-4">Category</th>
            <th className="p-4">Location</th>
            <th className="p-4 ">Blogerr Name</th>
            <th className="p-4 ">Activity</th>
          </tr>
        </thead>
        <tbody>
          {wishList?.map((wish, index) => (
            <tr
              key={index}
              className="even:bg-gray-100 hover:bg-gray-200 transition-colors text-center"
            >
              <td className="p-4 text-center">{index + 1}</td>
              <td className="p-4">{wish?.title}</td>
              <td className="p-4">{wish?.category}</td>
              <td className="p-4 text-center">{wish?.location}</td>
              <td className="p-4 text-center">{wish?.userInfo.name}</td>
              <td className="p-4 text-center">{wish?.userInfo.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
}
