import React from 'react'
import AddBlogForm from '../Componenet/AddBlog/AddBlogForm'

export default function UpdateBlog() {
  return (
    <div>
         <div className="text-center py-20 bg-slate-100">
                  <h2 className='text-2xl font-medium'>Update your Blog</h2>
                  <p className='mt-1 font-normal'>Modify your existing blog details and keep it up-to-date</p>
              </div>
            <AddBlogForm/>
    </div>
  )
}
