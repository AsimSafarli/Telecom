import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <>
        <div className="flex flex-row justify-evenly items-center p-1">
      <div className="">
        <img src="Assets/logo.png" width={55} height={55} />
      </div>
      <nav>
        <ul>
          <li className="flex flex-row gap-3">
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/about'>ABOUT US</NavLink>
            <NavLink to='/shop'>SHOP</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex flex-row gap-3">
        <button className="btn-solid">
        <NavLink to='/signup'>SIGN UP</NavLink>
        </button>
        <button className="btn-full">
        <NavLink to='/signin'>SIGN IN</NavLink>
        </button>
      </div>
    </div>
    </>
  )
}

export default Navbar
