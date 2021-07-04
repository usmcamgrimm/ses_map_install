import React from 'react'
import { Link } from 'gatsby'

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/install'>Install</Link>
        <Link to='/appData'>Data</Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}