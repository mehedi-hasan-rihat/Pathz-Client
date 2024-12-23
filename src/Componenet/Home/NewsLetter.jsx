import React from "react";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import groovyWalkAnimation from "../../assets/Lottie/newsletter-lottie.json";
export default function NewsLetter() {
  const notify = () =>
    toast("Thank you for subscribing to our newslettert", {
      duration: 4000,
      position: "top-center",
      style: {
        background: '#D4EDDA',
        color: '#155724', 
      },
    });

    const handleSubmit = (e) => {
      e.preventDefault()
      notify()
      e.target.reset()

    }

  return (
  <div className="bg-[#f1f1e7] py-2 my-20">
      <div className=" xl:flex gap-20 mx-auto max-w-5xl justify-between items-center">
        <div className="w-56 mx-auto xl:w-72 my-20"><Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
      <div className="">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl xl:text-4xl font-bold text-gray-800 mb-4">
            Stay Updated with Our Latest News!
          </h2>
          <p className="text-gray-600 mb-6 ">
            Subscribe to our newsletter and get the latest updates directly in
            your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="p-3 w-72 rounded-l-lg text-gray-700 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
