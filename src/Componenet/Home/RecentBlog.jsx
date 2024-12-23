import React, { useEffect, useState } from "react";
import BlogCart from "./BlogCart";
import axios from "axios";
import { motion } from "motion/react";

export default function RecentBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/recent-blog");
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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
      className=" text-center mt-36 mb-28">
        <h2 className="text-5xl font-medium">Recent Insights</h2>
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
