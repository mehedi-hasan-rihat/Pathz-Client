import React from "react";
import { useSpring, animated } from "@react-spring/web";
export default function BlogCart({id}) {
  const [props, set] = useSpring(() => ({
    transform: "perspective(600px) rotateX(0deg) rotateY(0deg)",
    config: { tension: 280, friction: 60 },
  }));
  return (
    <div className="mx-auto max-w-7xl">
      <div className={`px-20 my-5 flex items-center gap-10 ${id % 2 === 0 ? ' flex-col  xl:flex-row' : 'flex-col xl:flex-row-reverse'}`}>
        <div
          className="relative w-11/12 h-auto xl:w-[500px]"
          onMouseMove={(e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 50;
            const centerY = window.innerHeight / 50;

            const rotateX = (centerY - clientY) / 55;
            const rotateY = (centerX - clientX) / 55;

            set({
              transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            });
          }}
          onMouseLeave={() =>
            set({ transform: "perspective(600px) rotateX(0deg) rotateY(0deg)" })
          }
        >
          <animated.div style={props} className="">
            <div className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="thumbnail"
                className="h-80 w-full object-cover hover:shadow-xl"
              />
            </div>
          </animated.div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-black text-3xl">Moving trough: the everyday urban jungle of your city</h2>
          <p className="font-thin mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam ...</p>
        </div>
      </div>
    </div>
  );
}
