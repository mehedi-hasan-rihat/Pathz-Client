import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import Loader from "../Componenet/Loader";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import toast from "react-hot-toast";

export default function FeaturedPage() {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [wishList, setWishList] = useState([]);
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["wishList"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/wishlist?email=${user.email}`);
      setWishList(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
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

  const handleDetails = (id) => {
    navigate(`/blog/${id}`);
  };

  const notify = () =>
    toast("Succesfully deleted from wishlist", {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#D9EAFD",
      },
    });

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:5000/delete/${id}`);
      console.log(data);
      if (data.deletedCount > 0) {

        const updatedList = wishList.filter((data) => data._id !== id);
        setWishList(updatedList);
        notify()
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                <td className="p-4 text-center">
                  <div className="flex gap-5 items-center justify-center">
                    <p
                      onClick={() => {
                        handleDelete(wish?._id);
                      }}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={"Remove from wishList"}
                      data-tooltip-place="left"
                      className="text-xl"
                    >
                      <IoMdRemoveCircleOutline className="" />
                    </p>
                    <p
                      onClick={() => {
                        handleDetails(wish?._id);
                      }}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={"Show details"}
                      data-tooltip-place="left"
                      className="text-xl"
                    >
                      <TbListDetails />
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
