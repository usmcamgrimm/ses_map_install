import React from 'react'
import Navbar from './Navbar'
import '../css/typography.css'
import '../css/Layout.css'

import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  color: #ffffff;
  font-family: Securitas, sans-serif;
  height: 100vh;
`

export default function Layout({ children }) {
  return (
    <>
      <Wrapper>
        <Global
          styles={css`
            div {
              background: #031f30;
            }
          `}
        />
        <Navbar />
        { children }
      </Wrapper>
    </>
  )
}