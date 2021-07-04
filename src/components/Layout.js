import React from 'react'
import { Link } from 'gatsby'

import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  background: #031f30;
  font-family: sans-serif;
`

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/install'>Install</Link>
        <Link to='/appData'>Data</Link>
      </nav>
      <Wrapper>
        <Global
          styles={css`
            div {
              background: #031f30;
            }
          `}
        />
        { children }
      </Wrapper>
    </>
  )
}