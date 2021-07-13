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

const LinksContainer = styled.div`
  display: flex;
  margin-right: 3rem;
`

const NavLink = styled(Link)`
  color: #ffffff;
  font-family: Securitas;
  font-size: 1.5rem;
  padding-right: 1rem;
  text-decoration: none;
`

export default function Navbar() {
  return (
    <Nav>
      <StaticImage
        src="../resources/logo.png"
        layout="fixed"
        width={250}
        placeholder="blurred"
        alt="SES logo"
      />
      <LinksContainer>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/install'>Install</NavLink>
        <NavLink to='/appData'>Completed</NavLink>
      </LinksContainer>
    </Nav>
  )
}