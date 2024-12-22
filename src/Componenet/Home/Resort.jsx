import React from 'react'
import ResortCard from './ResortCard'

export default function DigitalGateway() {
  return (
    <div className='xl:grid grid-cols-3 px-20 gap-8 mx-auto max-w-7xl my-10'>
      <div className="col-span-2 my-10 xl:my-0">
        <div className="grid grid-cols-2  gap-5">
          <ResortCard/>
          <ResortCard/>
          <ResortCard/>
          <ResortCard/>
        </div>
      </div>
      <div className="col-span-1 xl:max-w-md">
        <h3 className='text-4xl font-bold text-gray-800'>How to Discover Your Digital Resort</h3>
        <p className='text-left mt-3 text-gray-500'>Find your perfect online sanctuary where relaxation meets innovation. Enjoy tailored experiences for creativity, productivity, and connection in a serene digital escape designed just for you. Explore virtual landscapes and unlock your ideal retreat today—your journey to peace starts here.</p>
      </div>
    </div>
  ) 
}
