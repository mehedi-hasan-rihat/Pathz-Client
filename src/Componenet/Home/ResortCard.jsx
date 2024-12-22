import React from "react";

export default function RedortCard() {
  return (
    <div>
      <div className="rounded-lg overflow-hidden">
        <img
          src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-09-1-1024x670.jpg"
          alt="Resort Image"
          className="w-full h-48 object-fill"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Paradise Beach Resort
          </h3>
          <p className="text-sm text-gray-600 mt-1">Location: Maldives</p>
       <div className="flex gap-5 items-center justify-between">
       <p className="text-lg font-bold text-gray-800 mt-2">$250/night</p>
       <button className="w-32 mt-4 font-bold py-2 rounded-md bg-blue-400 text-white hover:bg-blue-600">
            Book Now
          </button>
       </div>
        </div>
      </div>
    </div>
  );
}
