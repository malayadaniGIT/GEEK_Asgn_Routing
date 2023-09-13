import React from 'react'
import {NavLink} from "react-router-dom"
import "./style.css"
function Nav() {
  return (
    <div className='navbar'>
      <div className="img" >
      <img  src="https://www.geekster.in/images/logo.svg" alt="" />
      </div>
      <div className='navmenu'>
      <NavLink  className='navlink' to="">Home</NavLink>
      <NavLink  className='navlink' to="About">About</NavLink>
      <NavLink  className='navlink' to="Project">Project</NavLink>
      <NavLink  className='navlink' to="Services">Services</NavLink>
      <NavLink  className='navlink' to="Blog">Blog</NavLink>
      <NavLink  className='navlink' to="Contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default Nav
