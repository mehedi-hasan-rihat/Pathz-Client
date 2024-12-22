import React from "react";
import BlogCard from "./BlogCard";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center my-10 max-w-md md:max-w-lg xl:max-w-xl leading-5 mx-auto">
        <h2 className="text-4xl font-bold leading-loose">All Travel Tales</h2>
        <p className="text-gray-600">
          Dive into a world of journeys—discover adventures, cultures, and
          unforgettable experiences from every blog.
        </p>
      </div>

      <div className="mt-20">
        <form action=""  className="flex flex-row gap-5">
          <select className="select select-bordered w-full max-w-xs focus:outline-none">
            <option disabled selected>
            Filter by Category
            </option>
            <option>Adventure</option>
            <option>Cultural</option>
            <option>Luxury</option>
            <option>Budget Travel</option>
            <option>Eco-Travel</option>
            <option>Family-Travel</option>
            <option>Urban-Exploration</option>
            <option>Solo-Travel</option>
          </select>

          <label className="input input-bordered flex items-center gap-2 ">
            <input type="text" className="grow " placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
      </div>

      <div className="py-8 min-h-screen grid xl:grid-cols-4 md:grid-cols-2 gap-5 mb-20">
        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />

        <BlogCard
          title="Explore the Enchanted Alps"
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Unveil the majestic landscapes, cozy villages, and snowy adventures of the Alps."
          category="Adventure"
        />
      </div>
    </div>
  );
};

export default App;
