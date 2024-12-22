import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Componenet/ErrorPage'
import React from 'react'
import Mainlayout from '../layout/Mainlayout'
import HomePage from '../pages/HomePage'
import AllBlogPage from '../pages/AllBlogPage'
import BlogDetials from '../pages/BlogDetials'
import AddBlog from '../pages/AddBlog'
import UpdateBlog from '../pages/UpdateBlog'
import Feature from '../pages/FeaturedPage'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Mainlayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'/',
        element: <HomePage/>
      },
      {
        path:'/blogs',
        element: <AllBlogPage/>
      },
      {
        path:'/blog/:id',
        element: <BlogDetials/>
      },
      {
        path:'/add-blog',
        element: <AddBlog/>
      },
      {
        path:'/update',
        element: <UpdateBlog/>
      },
      {
        path:'/feature',
        element: <Feature/>
      }
    ]
  },
])

export default router
