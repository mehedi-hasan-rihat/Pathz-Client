import React, { useEffect, useState } from "react";
import BlogCart from "./BlogCart";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import SectionHeading from "../SectionHeading";
import NoData from "../NoData";

export default function RecentBlog() {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["recent-blogs"],
    queryFn: async () => {
      const { data } = await axios.get("https://pathz.vercel.app/recent-blog");
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  console.log(blogs.length);
  return (
    <div className="max-w-7xl mx-auto ">
      <SectionHeading
        subHeading={
          "Stay updated with our most recent adventures, destination guides, and travel tips, bringing you closer to your next unforgettable journey"
        }
        Heading={"Latest Travel Stories and Destinations"}
      ></SectionHeading>
      <div className="px-10 grid grid-cols-1">
        {blogs.length > 0 ? (
          blogs?.map((blog, idx) => {
            return <BlogCart key={blog._id} blogData={blog} id={idx} />;
          })
        ) : (
         <NoData/>
        )}
      </div>
    </div>
  );
}
