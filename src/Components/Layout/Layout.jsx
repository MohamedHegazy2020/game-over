import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout({ clearUserData, currUser  }) {
  return (
    <>
      
      <div className="bg-dark text-light min-vh-100 overflow-hidden">
        <Navbar clearUserData={clearUserData} currUser={currUser} />
        <Outlet />
      </div>
    </>
  );
}
