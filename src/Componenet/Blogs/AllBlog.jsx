import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/blogs`);
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (

      <div className="py-8 min-h-screen grid xl:grid-cols-4 md:grid-cols-2 gap-5 mb-20">
        {
          blogs?.map(blog => {
            return(
              <BlogCard key={blog._id} blogData={blog}/>
            )
          })
        }
      </div>
  );
};

export default App;
