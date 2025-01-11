import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { CiLocationOn, CiStar } from "react-icons/ci";

const BlogCard = ({ blogData }) => {
  const { user } = useContext(AuthContext);
  const { category, img, location, long_disc, short_disc, tips, title, _id } =
    blogData;
  const notify = () =>
    toast("Succesfully added to wishlist", {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#D9EAFD",
      },
    });

  const onWishlistClick = async () => {
    if(!user) return toast('Unable to add Wishlist, Please Login !!', {
      icon: '😩',
      style: {
        background: "#D9EAFD",
    
      },}
    )
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
        "https://pathz.vercel.app/add-watchlist",
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

  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/blog/${_id}`);
  };

  return (
    <div className="h-[450px]">
      <article
        className="overflow-hidden rounded-md transition h-full"
        style={{ boxShadow: "2px 1px 4px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="relative">
          <img alt="Product" src={img} className="h-56 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/80 "></div>

          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Click here to add to wishlist"
            data-tooltip-place="top"
            onClick={onWishlistClick}
            className="absolute top-4 right-4 w-7 h-7 text-center bg-white/90 text-2xl rounded-full shadow-md  transition-colors cursor-pointer flex itc justify-center text-[#047dff]"
            aria-label="Add to Wishlist"
          >
            <CiStar />
          </div>
        </div>

        <div className="flex flex-col justify-between  h-56">
          <div className=" sm:p-4 flex-1 overflow-hidden">
            <h3 className="font-semibold  uppercase ">{title}</h3>

            <div className="font-light text-gray-900 ">
              <p className="flex mt-1 gap-1 items-center">
                <CiLocationOn />
                {location}
              </p>
            </div>

            <p className="mt-3 text-md leading-5 text-[#707070]">
              {short_disc?.slice(0, 120)} .....
            </p>
          </div>

          <div
            onClick={handleDetails}
            className="sm:flex sm:items-end sm:justify-end"
          >
            <p className="block bg-[#007BFF] px-5 py-3 text-center text-xs font-bold uppercase transition hover:bg-[#5eacff] cursor-pointer rounded-br-md text-white/90 hover:text-white">
              Read Blog
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
