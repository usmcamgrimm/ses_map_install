import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../resources/logo.png'
// import { MdMenu } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className="Nav">
      <img src={logo} className="nav-logo" alt="logo" />
      <div className="NavMenu">
        <Link to='/'>Home</Link>
        <Link to='/install'>Install</Link>
        <Link to='/login'>Log In</Link>
      </div>
    </div>
  )
}

export default Navbar;