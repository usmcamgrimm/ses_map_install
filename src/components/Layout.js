import React from 'react'
import { Link } from 'gatsby'

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/app'>App</Link>
        <Link to='install'>Install</Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}