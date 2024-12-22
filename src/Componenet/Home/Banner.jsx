import React from 'react'

export default function Banner() {
  return (
    <div className='bg-banner-img relative h-[560px] xl:h-[720px] bg-cover bg-center grid place-items-center text-center my-2'>
      <div className="max-w-2xl xl:max-w-4xl">
        <h2 className="text-6xl xl:text-7xl px-5 text-white font-bold leading-tight xl:leading-tight xl:mb-7">Exploring One Step at a Time</h2>
        <p className="text-xl xl:text-2xl text-white font-medium mt-3 nunito-font max-w-xl xl:max-w-3xl mx-auto">Join Pathz in uncovering hidden gems and unforgettable destinations. Experience the world with inspiring stories</p>
      </div>
      <div className="bg-banner-bottom absolute bottom-0 h-14 lg:h-16 w-full"></div>
    </div>
  )
}
// import React from "react";
// import { useSpring, animated } from "@react-spring/web";

// export default function Banner() {
//   const [props, set] = useSpring(() => ({
//     transform: "perspective(400px) rotateX(0deg) rotateY(0deg)",
//     config: { tension: 280, friction: 60 },
//   }));

//   return (
//     <div
//       className="relative w-96 h-auto"
//       onMouseMove={(e) => {
//         const { clientX, clientY } = e;
//         const centerX = window.innerWidth / 8;
//         const centerY = window.innerHeight / 8;

//         const rotateX = (centerY - clientY) / 15;
//         const rotateY = (centerX - clientX) / 15;  

//         set({
//           transform: `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
//         });
//       }}
//       onMouseLeave={() => set({ transform: "perspective(400px) rotateX(0deg) rotateY(0deg)" })}
//     >
//       <animated.div style={props} className="group">
//         <div className="w-full mt-4">
//           <img
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="thumbnail"
//             className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
//           />
//         </div>
//       </animated.div>
//     </div>
//   );
// }
