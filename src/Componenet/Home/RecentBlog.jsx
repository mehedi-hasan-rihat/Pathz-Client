import React, { useEffect, useState } from "react";
import BlogCart from "./BlogCart";
import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import Loader from "../Loader";
import SectionHeading from "../SectionHeading";
export default function RecentBlog() {

  const {data : blogs, isLoading} = useQuery({ queryKey: ['recent-blogs'], queryFn: async () => {
    const { data } = await axios.get("http://localhost:5000/recent-blog");
    return data
  }})

  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="my-[90px] max-w-6xl mx-auto">
      {/* <motion.div
         initial={{ opacity: 0, scale: 0, y : 100 }}
         animate={{ opacity: 1, scale: 1, y:0 }}
         exit={{ opacity: 0 }}
         transition={{
           duration: 0.4,
           scale: { type: "spring", visualDuration: 0.6, bounce: 0.4 },
         }}
      className=" mx-auto text-center container">
      <div className=" flex items-center text-center gap-16">
        <span className="border-t-2 bg-green-800 border-gray-200 flex-1"></span>
        <span className="text-xl sm:text-3xl lg:text-5xl font-bold">Recent Insights</span>
        <span className="border-t-2 flex-1 border-gray-200"></span>
      </div>
        <p className="mt-5 text-gray-700 text-xl"> Explore the Latest Insights, Tips, and Stories from Our Recent Blogs</p>
      </motion.div> */}
      <SectionHeading subHeading={"Explore the Latest Insights, Tips, and Stories from Our Recent Blogs"} Heading={"Recent Insights"}></SectionHeading>
      <div className="mx-auto max-w-7xl">
       {blogs ? 
        blogs?.map((blog, idx) => {
          return (
            <BlogCart key={blog._id} blogData={blog} id={idx}/>
          )
        })
        : 
        <div></div>}
      </div>
    </div>
  );
}
