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
import AuthLayout from '../layout/AuthLayout'
import { path } from 'framer-motion/client'
import SignIn from '../pages/AuthPages/SignIn'
import SignUp from '../pages/AuthPages/SignUp'
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
  {
    path:'auth',
    element: <AuthLayout/>,
    children:[
      {
        path:'login',
        element: <SignIn/>
      },
      {
        path:'signUp',
        element: <SignUp/>
      }
    ]
  }
])

export default router
