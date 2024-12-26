import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const BlogCard = ({blogData}) => {
  const {user} = useContext(AuthContext)
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
  } = blogData;
  const notify = () =>
    toast("Succesfully added to wishlist", {
      duration: 4000,
      position: "top-center",
      style: {
        background: '#D9EAFD',
      },
    });

  const onWishlistClick = async () => {
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
  }


  const navigate = useNavigate()

const handleDetails = () => {
    navigate(`/blog/${_id}`)
}

  return (
    <div className="relative max-w-sm h-max rounded-2xl  mx-auto bg-gradient-to-br from-white/50 via-white/30 to-gray-100/10 overflow-hidden border border-gray hover:shadow-xl transition duration-500">
      <div className="relative">
        <img
          className="w-full h-60 object-cover rounded-t-2xl"
          src={img}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 rounded-t-2xl"></div>
        <div
            onClick={onWishlistClick}
          className="absolute top-4 right-4 w-10 h-9 text-center bg-white/90 text-2xl  rounded-full shadow-md hover:bg-red-200 transition-colors"
          aria-label="Add to Wishlist"
        >
          ❤️
        </div>
        <div className="absolute bottom-4 left-4 bg-blue-500 text-white font-medium text-sm px-3 py-1 rounded-full shadow-lg">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-wide">
          {title}
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {short_disc?.slice(0, 350)}...
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleDetails}
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
