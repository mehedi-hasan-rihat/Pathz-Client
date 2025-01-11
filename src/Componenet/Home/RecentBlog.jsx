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
    <div className="max-w-7xl mx-auto ">
      <SectionHeading subHeading={"Stay updated with our most recent adventures, destination guides, and travel tips, bringing you closer to your next unforgettable journey"} Heading={"Latest Travel Stories and Destinations"}></SectionHeading>
      <div className="px-10 grid grid-cols-1">
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
