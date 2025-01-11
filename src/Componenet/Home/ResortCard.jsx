import React from "react";

export default function RedortCard({ title, subTitle, img }) {
  return (
    <div className="h-96">
      {/* <div className="rounded-lg bg-gray-100 h-[300px] max-w-[500px] mx-auto ">
        <img src={img} alt="Resort Image" className="w-full h-48 object-fill" />
        <div className="p-4 flex items-end justify-between">
          <div className="">
            {" "}
            <h3 className="text-lg font-medium text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">Location: {location}</p>
          </div>
          <div className="flex gap-5 items-center justify-between"></div>
        </div>
      </div> */}
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg h-full group">
        <img
          alt=""
          src={img}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-500"
        />

        <div className="relative  bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-[220px] h-full flex flex-col">
         <div className="flex-1"></div>
          <div className="px-4 pb-4 ">
            <h3 className="mt-0.5 text-lg text-white">{title}</h3>
            <p className="mt-2 line-clamp-3 text-[14px] leading-5 text-white/95">
              {subTitle}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
