import React from "react";
import Banner from "../Componenet/Home/Banner";
import RecentBlog from "../Componenet/Home/RecentBlog";
import NewsLetter from "../Componenet/Home/NewsLetter";
import Resort from "../Componenet/Home/Resort";
import Map from "../Componenet/Home/Destination";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <div className="overflow-hidden ">
      <Helmet>
        <title>Pathz - Home</title>
      </Helmet>
      <Banner/>
      <RecentBlog />
      <Resort />
      <NewsLetter />
      <Map/>
    </div>
  );
}
