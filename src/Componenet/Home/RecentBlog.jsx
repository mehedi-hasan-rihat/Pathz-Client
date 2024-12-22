import React from "react";
import BlogCart from "./BlogCart";

export default function RecentBlog() {
  return (
    <div className="my-10">
      <div className=" text-center my-10">
        <h2 className="text-5xl font-semibold">Recent Insights</h2>
        <p className="mt-3 text-xl"> Travel Stories You Can't Miss</p>
      </div>
      <div className="">
        <BlogCart id={2} />
        <BlogCart id={1} />
        <BlogCart id={2} />
        <BlogCart id={1} />
        <BlogCart id={2} />
      </div>
    </div>
  );
}
