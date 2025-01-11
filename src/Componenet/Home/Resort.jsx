import React from "react";
import ResortCard from "./ResortCard";
import SectionHeading from "../SectionHeading";

export default function Resort() {
  return (
    <div className="mt-32 max-w-7xl mx-auto">
      {/* <div className="mx-auto text-center max-w-xl my-10">
        <h2 className="text-xl sm:text-3xl font-semibold">
         
        </h2>
        <p className="font-light mt-2">
         
        </p>
      </div> */}

      <SectionHeading Heading={"Best Resort Corner"} subHeading={" Discover the hidden gems of the world’s most exclusive resorts, offering unparalleled comfort and breathtaking views."}></SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 my-10">
        <div className="col-span-2 order-first">
          <div className="grid md:grid-cols-2  gap-5 ">
            <ResortCard
              title="BELNA Eco Resort"
              subTitle="Immerse yourself in serenity with oceanfront views and luxurious amenities. Explore virtual landscapes and unlock your ideal retreat today—your
            journey to peace starts here"
              img="https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ResortCard
              title=" Lakeside Serenity Resort"
             subTitle="Experience lush greenery, sandy beaches, and a vibrant tropical ambiance. "
              img="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ResortCard
              title=" Tropical Paradise Villa"
              subTitle="Escape to tranquility amidst breathtaking mountain landscapes."
              img="https://images.unsplash.com/photo-1622396481322-3b83d186701b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ResortCard
              title=" Mountain Haven Retreats"
subTitle='Rejuvenate by the calm waters with scenic views and premium comfort."

Let me know if you’d like customized options!'
              img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/44/ea/2f/royal-tulip-sea-pearl.jpg?w=900&h=-1&s=1"
            />
          </div>
        </div>
        <div className="col-span-1 xl:max-w-md md:hidden mt- lg:block">
          <h3 className="text-2xl font-semibold text-gray-800">
            How to Discover Your Digital Resort
          </h3>
          <p className=" mt-3 text-gray-500 text-justify">
          Unlock the future of relaxation with our exclusive Digital Resort experience. Immerse yourself in the tranquility of virtual escapes, where breathtaking landscapes and luxurious settings come to life. Whether you seek the calming rhythm of ocean waves, the refreshing air of majestic mountains, or the peaceful charm of lakeside serenity, every destination is crafted to perfection. Tailor your journey, embrace unparalleled comfort, and redefine the art of relaxation—all from the convenience of your screen. Your ideal retreat awaits, offering a seamless blend of innovation and indulgence. Begin your escape today
          </p>
        </div>
      </div>
    </div>
  );
}
