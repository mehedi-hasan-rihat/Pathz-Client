import React from "react";
import { Map, Marker } from "pigeon-maps";
export default function Destination() {
  return (
    <div className="container mx-auto my-32 px-2">
     <div className="sm:flex gap-10 md:gap-16 itms-center">
     <div className="flex-1 rounded-lg">
        <Map height={400} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={30} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
      <div className="flex-1 max-w-lg ">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4">Feature Destinations with Custom Maps</h2>
        <p className="text-gray-600 mb-6 text-justify">
        Bring your travel stories to life with fully integrated Google Maps. Our theme allows you to seamlessly embed customizable maps on any page, letting you match the style to your unique aesthetic. Highlight key destinations from your posts by pinning them directly onto the map, creating an interactive experience for your audience. Perfect for showcasing your journeys and guiding readers to explore the world with you.
        </p>
      </div>
     </div>
    </div>
  );
}
