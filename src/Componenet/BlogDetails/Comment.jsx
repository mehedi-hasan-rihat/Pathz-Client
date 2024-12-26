import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BlogDetails = () => {
  const {user} = useContext(AuthContext)
  const [comments, setComments] = useState([]);
  const [blogEmail, setBlogEmail] = useState('')
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/comments/${id}`);
      setComments(data);
    } catch (err) {
      console.log(err);
    }
  };

  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    fetchData();
    const fetchEmail = async () => {
      try {
        const { data } = await axiosSecure.get(`http://localhost:3000/blog/${id}`);
        setBlogEmail(data.userInfo.email);
      } catch (err) {
        console.log(err);
      }
    }

    fetchEmail()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const commentData = {
      name : user.displayName,
      email : user.email,
      photo : user.photoURL,
      comment : e.target.comment.value

    }

    console.log(commentData)
    try {
      const { data } = await axios.post(`http://localhost:3000/add-comment/${id}`,commentData);
      console.log(data)
      fetchData()
    } catch (err) {
      console.log(err);
    }
  };

return (
  <div className="blog-details px-5 border rounded-md border-gray-200">
    <div className="comment-section my-6">
      <h3 className="text-2xl text-gray-600 font-semibold">Comments</h3>

      {/* Comment Form */}
      {
        blogEmail !== user?.email ?
        <form className="mt-4 mb-16 relative" onSubmit={handleSubmit}>
        <textarea
          rows="4"
          name="comment"
          className="w-full resize-none h-32 p-2 border border-gray-300 rounded-md focus:outline-gray-400"
          placeholder="Write your comment here..."
        ></textarea>
        <button
          type="submit"
          className="mt-2 bg-blue-400 text-white py-2 px-4 rounded-md right-0 top-36  absolute"
        >
          Submit
        </button>
      </form> : <div className="w-full min-h-32 p-2 border  text-center border-gray-300 bg-gray-100 cursor-not-allowed rounded-md mt-5 flex items-center justify-center">Can not comment on own blog</div>
      }

      {/* Displaying Hardcoded Comments */}
      <div className="comments mt-10">
        {comments?.comments?.map((comment, index) => (
          <div key={index} className="comment flex mt-3">
            <img
            referrerPolicy="no-referrer"
              src={comment.photo}
              alt={comment.name}
              className="w-10 h-10 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-normal">{comment.name}</p>
              <p className="font-light text-sm">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
export default BlogDetails;
