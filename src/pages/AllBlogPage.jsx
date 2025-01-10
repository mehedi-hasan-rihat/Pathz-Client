import React, { useState } from "react";
import BlogCard from "../Componenet/Blogs/BlogCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Componenet/Loader";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs", category, search],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/blogs?filter=${category}&search=${search}`,
        { withCredentials: true }
      );

      return data;
    },
  });

  return (
    <div className="py-8 min-h-screen mb-20 ">
      <div className="">
        <div className="text-center py-20 bg-slate-100">
        <div className="max-w-md md:max-w-lg leading-6 mx-auto ">
          <h2 className="text-2xl font-semibold leading-loose">All Travel Tales</h2>
          <p className="text-gray-600">
            Dive into a world of journeys—discover adventures, cultures, and
            unforgettable experiences from every blog.
          </p>
        </div>
        </div>
        <div className="mt-20 px-2 sm:px-0 container mx-auto">
          <div className="flex flex-row gap-5">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="select select-bordered lg:w-full max-w-xs focus:outline-none"
            >
              <option value="">ALL Blogs</option>
              <option>Adventure</option>
              <option>Cultural</option>
              <option>Luxury</option>
              <option>Budget Travel</option>
              <option>Eco-Travel</option>
              <option>Family-Travel</option>
              <option>Urban-Exploration</option>
              <option>Solo-Travel</option>
            </select>

            <label className="input input-bordered flex items-center gap-2 msx-w-xs">
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                value={search}
                className="grow w-full"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 container mx-auto">
          {blogs?.map((blog) => {
            return <BlogCard key={blog._id} blogData={blog} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
