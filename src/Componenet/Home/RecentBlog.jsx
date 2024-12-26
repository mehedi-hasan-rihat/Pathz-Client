import React, { useEffect, useState } from "react";
import BlogCart from "./BlogCart";
import axios from "axios";
import { motion } from "motion/react";
import { useQuery } from '@tanstack/react-query'
import Loader from "../Loader";
export default function RecentBlog() {

  const {data : blogs, isLoading} = useQuery({ queryKey: ['recent-blogs'], queryFn: async () => {
    const { data } = await axios.get("http://localhost:3000/recent-blog");
    return data
  }})

  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="my-32">
      <motion.div
         initial={{ opacity: 0, scale: 0, y : 100 }}
         animate={{ opacity: 1, scale: 1, y:0 }}
         exit={{ opacity: 0 }}
         transition={{
           duration: 0.4,
           scale: { type: "spring", visualDuration: 0.6, bounce: 0.4 },
         }}
      className=" text-center mt-28 sm:mt-36 mb-10 sm:mb-20 md:mb-28 max-w-sm mx-auto">
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-medium">Recent Insights</h2>
        <p className="mt-3 text-lg"> Explore the Latest Insights, Tips, and Stories from Our Recent Blogs</p>
      </motion.div>
      <div className="">
       {
        blogs?.map((blog, idx) => {
          return (
            <BlogCart key={blog._id} blogData={blog} id={idx}/>
          )
        })
       }
      </div>
    </div>
  );
}
