import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(location.pathname)

  if (loading) return <p>Loading.....</p>
  if (user) return children

  return <Navigate to='/auth/login' state={location.pathname}/>
}
