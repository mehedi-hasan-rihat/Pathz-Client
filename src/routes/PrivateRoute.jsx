import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../Componenet/Loader'

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) return <Loader/>
  if (user) return children

  return <Navigate to='/auth/login' state={location.pathname}/>
}
