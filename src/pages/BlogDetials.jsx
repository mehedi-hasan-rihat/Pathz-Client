// import React, { useState } from "react";

// const BlogDetails = () => {
//   // Hardcoded blog data
//   const blogData = {
//     title: "Exploring the Wonders of Paris",
//     content: "Paris is known for its culture, food, and landmarks such as the Eiffel Tower.",
//     category: "Adventure",
//     ownerEmail: "mehedi4794@gmail.com",
//   };

//   // Hardcoded user data
//   const userData = {
//     email: "user@example.com", // Example current user email
//     displayName: "John Doe",
//     photoURL: "https://example.com/photo.jpg",
//   };

//   // State for comments
//   const [comments, setComments] = useState([
//     {
//       userName: "Jane Doe",
//       userProfilePic: "https://example.com/photo.jpg",
//       comment: "Amazing article, I love Paris!",
//     },
//     {
//       userName: "John Smith",
//       userProfilePic: "https://example.com/photo2.jpg",
//       comment: "Great insights on the Eiffel Tower!",
//     },
//   ]);
//   const [newComment, setNewComment] = useState("");

//   // Check if current user is the blog owner
//   const isOwner = userData.email === blogData.ownerEmail;

//   // Handle submitting a new comment
//   const handleCommentSubmit = () => {
//     if (newComment.trim()) {
//       const commentData = {
//         userName: userData.displayName,
//         userProfilePic: userData.photoURL,
//         comment: newComment.trim(),
//       };
//       setComments([...comments, commentData]);
//       setNewComment("");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold mb-4">{blogData.title}</h2>
//       <p className="text-gray-700">{blogData.content}</p>
//       <p className="text-sm text-gray-500 mt-4">Category: {blogData.category}</p>

//       {/* Conditional rendering based on blog ownership */}
//       {isOwner ? (
//         <p className="mt-4 text-red-500">You cannot comment on your own blog.</p>
//       ) : (
//         <div>
//           <textarea
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Write a comment..."
//             className="w-full p-3 mt-4 border rounded-md"
//             rows="4"
//           ></textarea>
//           <button
//             onClick={handleCommentSubmit}
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
//           >
//             Submit Comment
//           </button>
//         </div>
//       )}

//       {/* Comments Section */}
//       <div className="mt-6">
//         <h3 className="text-2xl font-semibold">Comments</h3>
//         {comments.length === 0 ? (
//           <p>No comments yet. Be the first to comment!</p>
//         ) : (
//           comments.map((comment, index) => (
//             <div key={index} className="mt-4 flex items-start gap-4">
//               <img
//                 src={comment.userProfilePic}
//                 alt={comment.userName}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <h4 className="font-semibold">{comment.userName}</h4>
//                 <p>{comment.comment}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

import React from "react";

export default function BlogDetials() {
  return (
    <div className="bg-[#FDFDFF]">
      <div className="h-[400px] lg:h-[600px] w-full">
        <img
          src="https://nadironthego.com/wp-content/uploads/2024/03/Sanliurfa-The-birthplace-of-Abraham-1920x1024.webp?crop=1"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-h-screen relative -top-14 py-12 max-w-4xl px-5 bg-white mx-auto">
        <div className="">
          <div className="">
            <div className="px-5">
              <h2 className="text-4xl lg:text-5xl font-normal">
                17 Places You Must Visit in Turkey
              </h2>
              <p className="mt-2 font-normal">
                Category : <span className="font-light">Adventure</span>
              </p>
              <div className="border mt-5 font-light border-gray-100 w-56 overflow-hidden rounded-md p-3">
                <div className="flex items-end gap-2 text-gray-500 text-sm">
                  <img
                    src="https://secure.gravatar.com/avatar/478fe4c4d46437a5f46607ca602a503e?s=130&d=identicon&r=g"
                    alt=""
                    className="w-10 rounded-full"
                  />
                  <p>Location : Istanbul, Franced</p>
                </div>
                <div className=" text-gray-500 text-sm">
                  <p className=" mt-2"> By Nadir on the GO - on 02/12/2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10"></div>
        </div>

        <div className="px-16 mt-16 font-light">
          <div className="leading-relaxed">
            <p>
              Turkey is a land of contrasts, where ancient meets modern, Europe
              is separated from Asia and the East fuses with the West. I visited
              Turkey and traveled through more than 20 cities and towns across
              the country for 5 months. Today, I will dive into the top 17
              places everyone should visit that goes beyond the typical tourist
              trail to uncover the heart and soul of this nation rich with
              natural wornders and culture. Each destination offers a unique
              glimpse into the land of four seasons. So, let’s jump right into
              it.{" "}
            </p>

            <p className="text-3xl font-medium mt-10 mb-6">Istanbul</p>
            <img
              src="https://nadironthego.com/wp-content/uploads/2024/03/Istanbul-the-greatest-city-in-Europe-1024x741.webp"
              alt=""
              className="object-contain"
            />

            <div className="my-8">
              <p>
                My trip to Kuakata was nothing short of magical. I arrived early
                in the morning, greeted by the warm sun and the cool breeze from
                the Bay of Bengal. The first thing I did was head to the beach,
                where I stood in awe watching the sunrise—a rare sight where you
                can witness both the sunrise and sunset over the same horizon.
                The morning sky painted hues of orange and pink, creating a
                perfect backdrop for the calm sea.
                <br />
                After soaking in the beauty of the sunrise, I wandered along the
                beach, feeling the soft sand beneath my feet and enjoying the
                peaceful atmosphere. I then visited the Kuakata Lighthouse,
                which offers a panoramic view of the coastline. The view from
                the top was breathtaking, and I couldn’t help but take a moment
                to appreciate the vastness of the sea stretching out before me.
                <br />
                Later, I explored the local fishermen's market, where the
                vibrant colors of the fishing boats and the lively energy of the
                local traders added a new layer to my experience. I interacted
                with the friendly locals, learning about their way of life and
                how they’ve harmonized with the sea for generations.
                <br />
                For lunch, I enjoyed some freshly prepared seafood, a must-try
                in this coastal town. The flavors were unforgettable, and it was
                the perfect way to recharge before continuing my adventure.
                <br />
                In the afternoon, I took a stroll around Lal Dighi, a peaceful
                lake surrounded by greenery, offering a serene contrast to the
                bustling beach. Before wrapping up my day, I visited the Rakhine
                Buddhist Temple, where the blend of spirituality and nature left
                a lasting impression.
                <br />
                As the sun began to set, I returned to the beach, witnessing
                another spectacular view as the sky turned shades of gold and
                purple. The peacefulness of Kuakata had captured my heart, and I
                left with memories that will last a lifetime.
              </p>

              <div className="my-10">
                <p className="font-medium">Tips for you : </p>
                <ul className="pl-5">
                  <li>Start Early to Catch the Sunrise and Sunset</li>
                  <li>Try Local Seafood</li>
                  <li>Respect the Local Culture and Traditions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2">
              <img
                src="https://nadironthego.com/wp-content/uploads/2024/03/Celsus-Library-in-Ephesus-1024x706.webp"
                alt="Celsus Library"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="col-span-1 flex flex-col sm:flex-row lg:flex-col gap-4">
              <img
                src="https://nadironthego.com/wp-content/uploads/2024/03/Cappadocia-Hot-air-Balloon-Rides-1024x698.webp"
                alt="Cappadocia Hot Air Balloon"
                className="w-full h-auto object-cover"
              />
              <img
                src="https://nadironthego.com/wp-content/uploads/2024/03/Pamukkale-is-a-surreal-experience-1024x683.webp"
                alt="Pamukkale"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
