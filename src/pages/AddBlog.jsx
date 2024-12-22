import React from 'react'
import AddBlogForm from '../Componenet/AddBlog/AddBlogForm'
export default function AddBlog() {
  return (
    <div>
          <div className="text-center py-20 bg-slate-100">
            <h2 className='text-2xl font-medium'>Add a new BLog</h2>
            <p className='mt-1 font-normal'>Create and share your blog with the world</p>
        </div>
      <AddBlogForm/>
    </div>
  )
}
