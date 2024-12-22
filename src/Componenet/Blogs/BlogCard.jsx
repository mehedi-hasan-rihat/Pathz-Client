import React from "react";

const BlogCard = ({ 
  title, 
  image, 
  description, 
  category, 
}) => {
  return (
    <div className="relative max-w-sm h-max rounded-2xl  mx-auto bg-gradient-to-br from-white/50 via-white/30 to-gray-100/10 overflow-hidden border border-gray hover:shadow-xl transition duration-500">
      {/* Image Section */}
      <div className="relative">
        <img 
          className="w-full h-60 object-cover rounded-t-2xl" 
          src={image} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 rounded-t-2xl"></div>
        <button
        //   onClick={onWishlistClick}
          className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-red-200 transition-colors"
          aria-label="Add to Wishlist"
        >
          ❤️
        </button>
        <div className="absolute bottom-4 left-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow-lg">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-wide">{title}</h2>
        <p className="text-gray-700 text-sm leading-relaxed">{description}...</p>
        <div className="flex justify-between items-center">
          <button
            // onClick={onDetailsClick}
            className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
