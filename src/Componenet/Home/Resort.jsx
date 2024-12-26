import React from 'react'
import ResortCard from './ResortCard'

export default function Resort() {
  return (
    <div className="mt-32">
 <div className="mx-auto text-center max-w-xl my-10">
  <h2 className='text-xl sm:text-3xl font-semibold'>Best Resort Corner</h2>
  <p className='font-light mt-2'>Discover the hidden gems of the world’s most exclusive resorts, offering unparalleled comfort and breathtaking views.</p>
 </div>

<div className='md:grid grid-cols-2 lg:grid-cols-3 px-5 sm:px-20 gap-8  mx-auto max-w-[1300px] my-10'>
      <div className="col-span-2 order-last md:order-first">
        <div className="grid md:grid-cols-2  gap-5 ">
          <ResortCard title="Peace in Bali’s Remote Beaches" location='Khulna' img="https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

          <ResortCard title='Discovering the Underrated Charms' location="US" img="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

          <ResortCard title=' The Ultimate Family Travel Guide' location="Sundorban" img="https://images.unsplash.com/photo-1622396481322-3b83d186701b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

          <ResortCard title='A Guide to the Best Kid-Friendly Destinations' location="Kuakata" img="https://images.unsplash.com/photo-1622396481322-3b83d186701b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
      </div>
      <div className="col-span-1 xl:max-w-md md:hidden lg:block">
        <h3 className='text-2xl font-semibold text-gray-800'>How to Discover Your Digital Resort</h3>
        <p className='text-left mt-3 text-gray-500'>Find your perfect online sanctuary where relaxation meets innovation. Enjoy tailored experiences for creativity, productivity, and connection in a serene digital escape designed just for you. Explore virtual landscapes and unlock your ideal retreat today—your journey to peace starts here.</p>
      </div>
    </div>
    </div>
  ) 
}
