import React from 'react'
import { Link } from 'react-router-dom'
// import { MdMenu } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="NavMenu">
        <Link to='/'>Home</Link>
        <Link to='/install'>Install</Link>
        <Link to='/login'>Log In</Link>
      </div>
    </div>
  )
}

export default Navbar;