import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import styled from '@emotion/styled'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,.2);
`

export default function Navbar() {
  return (
    <Nav>
      <StaticImage
        src="../resources/logo.png"
        layout="fixed"
        width={250}
        alt="SES logo"
      />
      <div className="LinksContainer">
        <Link to='/'>Home</Link>
        <Link to='/install'>Install</Link>
        <Link to='/appData'>Completed</Link>
      </div>
    </Nav>
  )
}