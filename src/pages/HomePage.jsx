import React from "react";
import Banner from "../Componenet/Home/Banner";
import RecentBlog from "../Componenet/Home/RecentBlog";
import NewsLetter from "../Componenet/Home/NewsLetter";
import Resort from "../Componenet/Home/Resort";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <RecentBlog />
      <NewsLetter />
      <Resort />
    </div>
  );
}
