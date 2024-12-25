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
import Wishlist from '../pages/WishListPage'
import AuthLayout from '../layout/AuthLayout'
import SignIn from '../pages/AuthPages/SignIn'
import SignUp from '../pages/AuthPages/SignUp'
import PrivateRoute from './PrivateRoute'
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
        element:<PrivateRoute><AddBlog/></PrivateRoute>
      },
      {
        path:'/update/:id',
        element: <PrivateRoute><UpdateBlog/></PrivateRoute>
      },
      {
        path:'/feature',
        element: <Feature/>
      },
      {
        path:'/wishlist',
        element:<PrivateRoute><Wishlist/></PrivateRoute>
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
