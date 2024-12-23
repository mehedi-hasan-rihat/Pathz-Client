import React, { useContext, useEffect, useState } from "react";
import Comment from "../Componenet/BlogDetails/Comment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GrDocumentUpdate } from "react-icons/gr";
import { AuthContext } from "../providers/AuthProvider";
import { format } from "date-fns";

export default function BlogDetials() {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [blogEmail, setBlogEmail] = useState("");
  const {
    category,
    cover_img,
    img,
    img_1,
    img_2,
    img_3,
    location,
    long_disc,
    short_disc,
    tips,
    title,
    _id,
  } = blog;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/blog/${id}`);
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    const fetchEmail = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/blog/${id}`);
        setBlogEmail(data.userInfo?.email);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEmail();
  }, []);

  const handleUpdate = () => {
    console.log("update");
  };

  return (
    <div className="bg-[#FDFDFF]">
      <div className="h-[400px] lg:h-[600px] w-full">
        <img src={cover_img} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="min-h-screen relative -top-14 py-12 max-w-4xl px-5 bg-white mx-auto">
        {blogEmail === user?.email && (
          <div
            onClick={handleUpdate}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={"Update Your Blog"}
            data-tooltip-place="left"
            className="absolute right-10 ring-2 ring-gray-300 bg-blue-100 text-2xl p-2 rounded-full hover:shadow-xl duration-300 hover:scale-110"
          >
            <GrDocumentUpdate />
          </div>
        )}
        <div className="">
          <div className="px-5">
            <h2 className="text-4xl lg:text-5xl font-normal">{title}</h2>
            <p className="mt-2 font-normal">
              Category : <span className="font-light">{category}</span>
            </p>
            <div className="border mt-5 font-light border-gray-100 w-60 overflow-hidden rounded-md p-3">
              <div className="flex items-end gap-2 text-gray-500 text-sm">
                <img
                  src={blog?.userInfo?.photo}
                  alt=""
                  className="w-10 rounded-full"
                />
                <p>
                  <span className="font-normal">Location</span> :{" "}
                  {location?.split(" ")[0]}
                </p>
              </div>
              <div className=" text-gray-500 text-sm">
                <p className=" mt-2">

                  By <span className="font-medium">{blog?.userInfo?.name}</span>
                  - on
                  {blog?.userInfo?.date &&
                    format(new Date(blog?.userInfo?.date), "yyyy-MM-dd")}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10"></div>
          <div className="px-16 mt-16 font-light">
            <div className="leading-relaxed">
              <p>{short_disc}</p>
              <p className="text-3xl font-medium mt-10 mb-6">{location}</p>
              <img src={img} alt="" className="object-contain" />

              <div className="my-8">
                {console.log(tips)}
                <div>
                  {long_disc?.map((disc, idx) => {
                    return <p key={idx}>{disc}</p>;
                  })}
                </div>
              
                <div className="my-10">
                  <p className="font-medium">Tips for you : </p>
                  <ul className="pl-5">
                    {tips?.map((map, idx) => {
                      return <li key={idx}>{map}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-2">
                <img
                  src={img_1}
                  alt="Celsus Library"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="col-span-1 flex flex-col sm:flex-row lg:flex-col gap-4">
                <img
                  src={img_2}
                  alt="Cappadocia Hot Air Balloon"
                  className="w-full h-auto object-cover"
                />

                <img
                  src={img_3}
                  alt="Pamukkale"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <Comment />
        </div>
      </div>
    </div>
  );
}
