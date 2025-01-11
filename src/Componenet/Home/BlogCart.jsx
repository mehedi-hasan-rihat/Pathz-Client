import React, { useContext } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { motion } from "motion/react";
import { PhotoView } from "react-photo-view";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function BlogCart({ id, blogData }) {
  const { title, short_disc, img, _id, location } = blogData;
  const { user } = useContext(AuthContext);
  const notify = () =>
    toast("Succesfully added to wishlist", {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#D9EAFD",
      },
    });
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/blog/${_id}`);
  };

  const axiosSecure = useAxiosSecure();

  const handleAddWishList = async () => {

    if(!user) return toast('Unable to add Wishlist, Please Login !!', {
      icon: '😩',
      style: {
        background: "#D9EAFD",
    
      },
    });

    const watchListData = {
      blogId: _id,
      userData: {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      },
    };
    try {
      const { data } = await axiosSecure.post(
        "http://localhost:5000/add-watchlist",
        watchListData
      );
      if (data.insertedId) {
        notify();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [props, set] = useSpring(() => ({
    transform: "perspective(600px) rotateX(0deg) rotateY(0deg)",
    config: { tension: 280, friction: 60 },
  }));

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        ...(id % 2 === 0 ? { x: -100 } : { x: 100 }),
      }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.8, bounce: 0.4 },
      }}
      className={`flex xl:items-center gap-8 lg:gap-12 w-full  h-[550px]  md:h-[520px] lg:h-[300px] xl:h-72 mb-20 ${
        id % 2 === 0 ? " flex-col  lg:flex-row" : "flex-col lg:flex-row-reverse"
      }`}
    >
      {/* card image */}
      <div
        className="relative w-full h-64 md:h-72 xl:h-full lg:w-[500px] "
        onMouseMove={(e) => {
          const { clientX, clientY } = e;
          const centerX = window.innerWidth / 80;
          const centerY = window.innerHeight / 80;

          const rotateX = (centerY - clientY) / 80;
          const rotateY = (centerX - clientX) / 85;

          set({
            transform: `perspective(700px) ${
              id % 2 === 0
                ? `rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`
                : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            } `,
          });
        }}
        onMouseLeave={() =>
          set({ transform: "perspective(700px) rotateX(1deg) rotateY(1deg)" })
        }
      >
        <animated.div
          style={props}
          className="h-full bg-gray-100 p-1 rounded-sm"
        >
          <PhotoView src={img}>
            <img
              src={img}
              alt="thumbnail"
              className="h-full w-full object-cover hover:shadow-xl"
            />
          </PhotoView>
        </animated.div>
      </div>

      <div className="flex-1 h-72 px-2 flex flex-col">

        <div className="flex-1">
          {" "}
          <div className=" xl:flex-col">
            <h2 className="font-medium text-gray-800 text-lg sm:text-xl md:text-xl xl:2xl uppercase">
              {title}
            </h2>

            <p className="flex items-center  gap-2 xl:mt-1">
              <CiLocationOn /> {location}
            </p>
          </div>
          <p className="xl:hidden text-[#707070] mt-2 xl:mt-3 text-justify">
            {short_disc?.slice(0, 220)} .....
          </p>
          <p className="hidden xl:block text-[#707070] mt-2 xl:mt-3 text-justify">
            {short_disc?.slice(0, 350)} .....
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <div
            onClick={handleAddWishList}
            className="group relative inline-block overflow-hidden border border-[#007BFF] px-5 focus:outline-none cursor-pointer pt-2 rounded-md"
          >
            <span className="absolute inset-y-0 right-0 w-[2px] bg-[#007BFF] transition-all group-hover:w-full group-active:bg-indigo-500"></span>

            <span className="relative text-sm font-medium text-[#007BFF] transition-colors group-hover:text-white">
              Add to Watchlist
            </span>
          </div>

          <div
            onClick={handleDetails}
            className="group cursor-pointer flex items-center justify-between gap-4 rounded-md border border-[#007BFF] bg-[#007BFF] px-5 transition-colors hover:bg-transparent focus:outline-none focus:ring py-1 "
          >
            <span className="font-medium text-white transition-colors group-hover:text-[#007BFF] group-active:text-indigo-500">
              Find out more
            </span>

            <span className="shrink-0 rounded-full border border-current bg-white p-2 text-[#007BFF] group-active:text-indigo-500">
              <svg
                className="size-4 -rotate-45 group-hover:rotate-0 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
