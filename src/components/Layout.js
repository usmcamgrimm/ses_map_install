import React from 'react'
import { Link } from 'gatsby'
import Navbar from './Navbar'
import '../css/typography.css'

import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  color: #ffffff;
  font-family: Securitas, sans-serif;
  font-weight: normal;
  font-kerning: normal;
`

export default function Layout({ children }) {
  return (
    <>
      <Wrapper>
        <Navbar />
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