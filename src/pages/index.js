import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export default function Index() {
  return (
    <Layout>
      <Container>
        <h1>
          Managed Assets Portal
        </h1>
        <StaticImage
          src="../resources/logo.png"
          layout="constrained"
          placeholder="tracedSVG"
          alt="SES logo"
        />
      </Container>
    </Layout>
  )
}