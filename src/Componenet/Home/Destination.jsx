import React from "react";
import { Map, Marker } from "pigeon-maps";
export default function Destination() {
  return (
    <div className="container mx-auto my-32 px-2">
     <div className="sm:flex gap-10 md:gap-20 items-center">
     <div className="flex-1 rounded-lg">
        <Map height={400} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={30} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
      <div className="flex-1 max-w-lg mt-3">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4">Feature Destinations on the Map</h2>
        <p className="text-gray-600 mb-6 ">
          Our theme lets you integrate Google Maps on any of your pages. Not
          only this, but the maps are fully customizable so you can use the
          style that fits you the most! You can also easily pin the destinations
          from your posts right on the map!
        </p>
      </div>
     </div>
    </div>
  );
}
