import React from 'react'
import ResortCard from './ResortCard'

export default function Resort() {
  return (
    <div className="">
 <div className="mx-auto text-center max-w-xl my-5">
  <h2 className='text-xl sm:text-3xl font-semibold'>Best Resort Corner</h2>
  <p className='font-light mt-2'>Discover the hidden gems of the world’s most exclusive resorts, offering unparalleled comfort and breathtaking views.</p>
 </div>

<div className='md:grid grid-cols-2 lg:grid-cols-3 px-5 sm:px-20 gap-8  mx-auto max-w-[1300px] my-10'>
      <div className="col-span-2 my-10 xl:my-0 order-last lg:order-first">
        <div className="grid md:grid-cols-2  gap-5 ">
          <ResortCard title="Peace in Bali’s Remote Beaches" location='Khulna'/>
          <ResortCard title='Discovering the Underrated Charms' location="US"/>
          <ResortCard title=' The Ultimate Family Travel Guide' location="Sundorban"/>
          <ResortCard title='A Guide to the Best Kid-Friendly Destinations' location="Kuakata"/>
        </div>
      </div>
      <div className="col-span-1 xl:max-w-md">
        <h3 className='text-2xl font-semibold text-gray-800'>How to Discover Your Digital Resort</h3>
        <p className='text-left mt-3 text-gray-500'>Find your perfect online sanctuary where relaxation meets innovation. Enjoy tailored experiences for creativity, productivity, and connection in a serene digital escape designed just for you. Explore virtual landscapes and unlock your ideal retreat today—your journey to peace starts here.</p>
      </div>
    </div>
    </div>
  ) 
}
