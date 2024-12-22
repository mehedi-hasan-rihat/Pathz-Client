import React, { useEffect, useState } from "react";
import BlogCart from "./BlogCart";
import axios from "axios";

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
      <div className=" text-center my-10">
        <h2 className="text-5xl font-semibold">Recent Insights</h2>
        <p className="mt-3 text-xl"> Travel Stories You Can't Miss</p>
      </div>
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
