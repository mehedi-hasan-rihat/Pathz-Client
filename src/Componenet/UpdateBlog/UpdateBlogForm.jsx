import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function UpdateBlogForm() {
  const { user } = useContext(AuthContext);
  const [blog, setBlog] = useState();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://pathz.vercel.app/blog/${id}`);
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

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
  } = blog || {};


  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    formObject.long_disc = formObject.long_disc.split("\n");
    formObject.tips = formObject.tips.split("\n");
    const userInfo = {
      email: user?.email,
      photo: user?.photoURL,
      name: user?.displayName,
      last_updated_date: new Date(),
    };

    const blogData = { userInfo, ...formObject };
    console.log(blogData);
    axiosSecure
      .put(`/update/${id}`, blogData)
      .then(function (response) {
        console.log(response.data);
        if(response.data.modifiedCount > 0){
          Swal.fire({
            title: "Data Updated Successfully",
            text: " ",
            icon: "success",
          });
        } else if(response.data.modifiedCount === 0 ){
          Swal.fire({
            title: "Please change something to update blog",
            text: " ",
            icon: "info",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="max-w-5xl mt-5 mx-auto">
      <form className="card-body" onSubmit={handleUpdate}>
        <div className="flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              defaultValue={title}
              name="title"
              type="text"
              minLength="18"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Cover Img Link</span>
            </label>
            <input
              defaultValue={cover_img}
              name="cover_img"
              type="url"
              placeholder="Cover Img Link"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="flex gap-5">
          {category && (
            <div className="w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue={blog?.category}
                name="category"
                className="select select-bordered w-full "
              >
                <option disabled>Filter by Category</option>
                <option>Adventure</option>
                <option>Cultural</option>
                <option>Luxury</option>
                <option>Budget Travel</option>
                <option>Eco-Travel</option>
                <option>Family-Travel</option>
                <option>Urban-Exploration</option>
                <option>Solo-Travel</option>
              </select>
            </div>
          )}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              defaultValue={location}
              name="location"
              type="text"
              placeholder="Location"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            defaultValue={short_disc}
            name="short_disc"
            minLength="400"
            className="textarea textarea-bordered min-h-28"
            placeholder="Shot discription about your travle"
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Long Description</span>
          </label>
          <textarea
            defaultValue={long_disc?.join("\n")}
            name="long_disc"
            className="textarea textarea-bordered min-h-48"
            placeholder="Enter every tips in a new line"
          ></textarea>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Show an Image</span>
          </label>
          <input
            defaultValue={img}
            name="img"
            type="url"
            placeholder="Enter an Img link"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Suggetin or tips</span>
          </label>
          <textarea
            defaultValue={tips?.join("\n")}
            name="tips"
            required
            className="textarea textarea-bordered min-h-48"
            placeholder="Enter every tips in a new line"
          ></textarea>
        </div>

        <div className="border border-gray-200 p-5 rounded-md my-3">
          <p className="text-center text-2xl">Group Image Section</p>
          <p className="text-center mt-1 font-light">
            Enter some image link for you img gallery
          </p>
          <div className="grid grid-cols-2 gap-4  mt-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image-1</span>
              </label>
              <input
                defaultValue={img_1}
                type="url"
                name="img_1"
                placeholder="Image-1"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image-2</span>
              </label>
              <input
                defaultValue={img_2}
                name="img_2"
                type="url"
                placeholder="Image-2"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image-3</span>
              </label>
              <input
                defaultValue={img_3}
                name="img_3"
                type="url"
                placeholder="Image-3"
                className="input input-bordered"
                required
              />
            </div>
          </div>
        </div>

        <button className="btn bg-blue-500">Submit</button>
      </form>
    </div>
  );
}
