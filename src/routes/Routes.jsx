import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Componenet/ErrorPage'
import React from 'react'
import Mainlayout from '../layout/Mainlayout'
import HomePage from '../pages/HomePage'
import AllBlog from '../Componenet/Blogs/AllBlog'
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
        element: <AllBlog/>
      }
    ]
  },
])

export default router
