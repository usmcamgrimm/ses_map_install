/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../resources/logo.png'
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
// import { MdMenu } from 'react-icons/md'

const Nav = styled.div`
  background-color: #031f30;
  border-bottom: 1px solid rgba(255,255,255,.2);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
`
const NavMenu = styled.div`
  margin-right: 250px;
`
const NavLinks = styled(Link)`
  font-size: 1.5rem;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid #fc273f;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <img 
        css={{ width: 250 }}
        src={logo} 
        alt="logo" 
      />
      <NavMenu>
        <NavLinks to='/'>Home</NavLinks>
        <NavLinks to='/install'>Install</NavLinks>
        <NavLinks to='/login'>Log In</NavLinks>
      </NavMenu>
    </Nav>
  )
}

export default Navbar;