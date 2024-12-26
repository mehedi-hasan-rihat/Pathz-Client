import React, { useEffect, useState } from "react";
import BlogCart from "./BlogCart";
import axios from "axios";
import { motion } from "motion/react";
import { useQuery } from '@tanstack/react-query'
import Loader from "../Loader";
export default function RecentBlog() {

  const {data : blogs, isLoading} = useQuery({ queryKey: ['recent-blogs'], queryFn: async () => {
    const { data } = await axios.get("https://pathz.vercel.app/recent-blog");
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
      className=" mx-auto text-center max-w-xl my-10">
        <h2 className="text-xl sm:text-3xl font-semibold">Recent Insights</h2>
        <p className="font-light mt-2"> Explore the Latest Insights, Tips, and Stories from Our Recent Blogs</p>
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
