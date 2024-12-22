import React, { useState } from 'react';

const BlogDetails = () => {
  // Hardcoded comment data
  const comments = [
    {
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      comment: "This is a great post! Really enjoyed reading it.",
    },
    {
      name: "Jane Smith",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      comment: "I found this very helpful, thanks for sharing!",
    },
    {
      name: "Mark Lee",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      comment: "Amazing insights, would love to see more posts like this.",
    },
  ];


  return (
    <div className="blog-details px-5 border rounded-md border-gray-200">
<div className=""></div>
      <div className="comment-section my-6">
        <h3 className="text-2xl text-gray-600 font-semibold">Comments</h3>

        {/* Comment Form */}
        <form  className="mt-4 relative">
          <textarea
            rows="4"
            className="w-full min-h-32 p-2 border border-gray-300 rounded-md focus:outline-gray-400"
            placeholder="Write your comment here..."
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-blue-400 text-white py-2 px-4 rounded-md right-0 top-36  absolute"
          >
            Submit
          </button>
        </form>

        {/* Displaying Hardcoded Comments */}
        <div className="comments mt-20">
          {comments.map((comment, index) => (
            <div key={index} className="comment flex mt-6">
              <img
                src={comment.profilePic}
                alt={comment.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-normal">{comment.name}</p>
                <p className='font-light text-sm'>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
