import React, { useContext, useEffect, useState } from "react";
import Comment from "../Componenet/BlogDetails/Comment";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { GrDocumentUpdate } from "react-icons/gr";
import { AuthContext } from "../providers/AuthProvider";
import { format } from "date-fns";
import { PhotoView } from "react-photo-view";

export default function BlogDetials() {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()
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
    navigate(`/update/${id}`)
  };

  return (
    <div className="bg-[#FDFDFF]">
      <div className="h-[400px] lg:h-[600px] w-full">
        {cover_img && (
          <PhotoView src={cover_img}>
            <img
              src={cover_img}
              alt=""
              className="h-full w-full object-cover"
            />
          </PhotoView>
        )}
      </div>

      <div className="min-h-screen relative -top-14 py-12 max-w-4xl px-5 bg-white mx-auto">
        {blogEmail === user?.email && (
          <div
            onClick={handleUpdate}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={"Update Your Blog"}
            data-tooltip-place="left"
            className="absolute right-1 sm:right-5 top-16 ring-2 ring-gray-300 bg-blue-100 text-lg md:text-2xl p-2 rounded-full hover:shadow-xl duration-300 hover:scale-110"
          >
            <GrDocumentUpdate />
          </div>
        )}
        <div className="">
          <div className="px-5">
            <h2 className="text-md sm:text-xl md:text-4xl font-normal">{title}</h2>
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
          <div className="md:px-16 mt-16 font-light">
            <div className="leading-relaxed">
              <p>{short_disc}</p>
              <p className="text-3xl font-medium mt-10 mb-6">{location}</p>
              { 
                <PhotoView src={img}>
    
                  <img src={img} alt="" className="object-contain" />
                </PhotoView>
              }

              <div className="my-8">
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
                {img_1 && (
                  <PhotoView src={img_1}>
                    <img
                      src={img_1}
                      alt="img-1"
                      className="w-full h-auto object-cover"
                    />
                  </PhotoView>
                )}
              </div>

              <div className="col-span-1 flex flex-col sm:flex-row lg:flex-col gap-4">
                {img_2 && (
                  <PhotoView src={img_2}>
                    <img
                      src={img_2}
                      alt="img-2"
                      className="w-full h-auto object-cover"
                    />
                  </PhotoView>
                )}

                {img_3 && (
                  <PhotoView src={img_3}>
                    <img
                      src={img_3}
                      alt="img-3"
                      className="w-full h-auto object-cover"
                    />
                  </PhotoView>
                )}
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
