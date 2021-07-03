import React from 'react'
import { Link } from 'gatsby'

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/install'>Install</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}