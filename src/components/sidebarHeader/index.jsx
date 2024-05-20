import React from 'react'
import { FaBars } from "react-icons/fa6";
import './sidebarHeader.scss'


const SidebarHeader = ({setClose}) => {
  return (
    <div className='sidebarheader'>
        <button onClick={()=> setClose(p => !p)}><FaBars /></button>
        <h4>John Doe 1</h4>
    </div>
  )
}

export default SidebarHeader