import axios from "axios";
import React from "react";

export default function AddBlogForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    formObject.long_disc = formObject.long_disc.split('\n')
    formObject.tips = formObject.tips.split('\n')
    
    console.log("Form Submitted:", formObject);
    axios.post('http://localhost:3000/add-blog',formObject)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  };

  return (
    <div className="max-w-5xl mt-5 mx-auto">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              name="title"
              type="text"
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
              name="cover_img"
              type="url"
              placeholder="Cover Img Link"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full text-gray-500"
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
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
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
            name="short_disc"
            className="textarea textarea-bordered min-h-28"
            placeholder="Shot discription about your travle"
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Long Description</span>
          </label>
          <textarea
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
            name="tips"
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
