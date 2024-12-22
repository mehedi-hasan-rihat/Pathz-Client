import React from "react";
import AllBlog from "../Componenet/Blogs/AllBlog";
export default function AllBlogPage() {
  return (

      <div className="container mx-auto">
        <div className="text-center my-10 max-w-md md:max-w-lg xl:max-w-xl leading-5 mx-auto">
          <h2 className="text-4xl font-bold leading-loose">All Travel Tales</h2>
          <p className="text-gray-600">
            Dive into a world of journeys—discover adventures, cultures, and
            unforgettable experiences from every blog.
          </p>
        </div>

        <div className="mt-20">
          <form action="" className="flex flex-row gap-5">
            <select className="select select-bordered lg:w-full max-w-xs focus:outline-none">
              <option disabled>Filter by Category</option>
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
              <input type="text" className="grow w-full" placeholder="Search" />
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
          </form>
      </div>
      <AllBlog />
    </div>
  );
}
