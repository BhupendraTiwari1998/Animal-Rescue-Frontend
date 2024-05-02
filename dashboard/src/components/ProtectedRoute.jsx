import React from 'react'
import SideBarComp from './SideBarComp'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const auth = localStorage.getItem("token")

  return (
    <div>

      {
        auth ? (
          <SideBarComp>
            <Outlet />
          </SideBarComp>
        ) : (
          <Navigate to="/sign-in" />
        )
      }



    </div>
  )
}

export default ProtectedRoute