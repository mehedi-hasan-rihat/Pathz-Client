import React, { useContext } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { motion } from "motion/react";
import { PhotoView } from "react-photo-view";

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

  const handleAddWishList = async () => {
    const watchListData = {
      blogId: _id,
      userData: {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:3000/add-watchlist",
        watchListData
      );
      console.log(data);
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
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, scale: 0, ...(id % 2 === 0 ? { x: -100 } : { x: 100 })}}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.8, bounce: 0.4 },
        }}
        className={`px-3 sm:px-7 md:px-20 my-10 lg:my-14 flex xl:items-center gap-5 lg:gap-10 ${
          id % 2 === 0
            ? " flex-col  xl:flex-row"
            : "flex-col xl:flex-row-reverse"
        }`}
      >
        <div
          className="relative w-11/12 h-auto xl:w-[500px]"
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
          <animated.div style={props} className="">
            <div className="w-full mt-4">
              <PhotoView src={img}><img
                src={img}
                alt="thumbnail"
                className="h-80 w-full object-cover hover:shadow-xl"
              /></PhotoView>
            </div>
          </animated.div>
        </div>
        <div className="flex-1">
          <div className="mr-16 xl:flex-col">
            <h2 className="font-medium text-gray-800 text-lg sm:text-xl md:text-3xl lg:text-4xl">{title}</h2>

            <p className="flex items-center gap-2 mt-2">
              <CiLocationOn /> {location}
            </p>
          </div>
          <p className="font-light mt-5">{short_disc?.slice(0,450)} .....</p>

          <div className="flex gap-3 my-5">
            <div
              className="btn bg-blue-400 text-white hover:bg-blue-500"
              onClick={handleDetails}
            >
              Details
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.3 },
              }}
              className="btn bg-blue-400 text-white hover:bg-blue-500"
              onClick={handleAddWishList}
            >
              Add Wishlist
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
