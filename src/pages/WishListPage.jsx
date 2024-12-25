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
    <div className="overflow-x-auto my-16 px-1 rounded-xl text-sm sm:text-md min-h-[calc(100vh-500px)] max-w-5xl mx-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-[#60A5FA] text-white">
          <tr className="text-center">
            <th className="p-4">#</th>
            <th className="p-4 ">Title</th>
            <th className="p-4">Long Description</th>
            <th className="p-4">Category</th>
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
              <td className="p-4">{wish?.long_disc}</td>
              <td className="p-4 text-center">{wish?.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
