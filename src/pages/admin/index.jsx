import React, { useState } from 'react'
import './admin.scss'
import Sidebar from '../../components/sidebar'
import { Outlet } from 'react-router-dom'
import SidebarHeader from '../../components/sidebarHeader'

const Admin = () => {
  const [close, setClose] = useState(false)

  return (
    <div className={`admin ${close ? "close" : ""}`}>
      <Sidebar />
      <div>
        <SidebarHeader setClose={setClose}/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Admin