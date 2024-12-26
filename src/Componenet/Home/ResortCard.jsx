import React from "react";

export default function RedortCard({ title, location, img }) {
  return (
    <div>
      <div className="rounded-lg bg-gray-100 h-[300px] max-w-[500px] mx-auto ">
        <img src={img} alt="Resort Image" className="w-full h-48 object-fill" />
        <div className="p-4 flex items-end justify-between">
          <div className="">
            {" "}
            <h3 className="text-lg font-medium text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">Location: {location}</p>
          </div>
          <div className="flex gap-5 items-center justify-between"></div>
        </div>
      </div>
    </div>
  );
}
