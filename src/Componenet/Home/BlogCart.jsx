import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";


export default function BlogCart({ id, blogData }) {
const {title, short_disc, img, _id} = blogData

const navigate = useNavigate()

const handleDetails = () => {
    navigate(`/blog/${_id}`)
}

  const [props, set] = useSpring(() => ({
    transform: "perspective(600px) rotateX(0deg) rotateY(0deg)",
    config: { tension: 280, friction: 60 },
  }));

  return (
    <div className="mx-auto max-w-7xl">
      <div
        className={`px-20 my-10 lg:my-14 flex lg:items-center gap-5 lg:gap-10 ${
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
              <img
                src={img}
                alt="thumbnail"
                className="h-80 w-full object-cover hover:shadow-xl"
              />
            </div>
          </animated.div>
        </div>
        <div className="flex-1">
          <h2 className="font-medium text-gray-800 text-4xl">
           {title}
          </h2>
          <p className="font-light mt-5">
           {short_disc}
          </p>

          <div className="flex gap-3 my-5">
            {" "}
            <div className="btn bg-blue-400 text-white hover:bg-blue-500" onClick={handleDetails}>Details</div>
            <div className="btn bg-blue-400 text-white hover:bg-blue-500">Add Wishlist</div>
          </div>
        </div>
      </div>
    </div>
  );
}
