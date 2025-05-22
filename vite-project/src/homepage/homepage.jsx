import React from 'react'
import './homepage.css'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function homepage() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default homepage
