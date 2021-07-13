import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Title = styled.h1`
  font-family: Securitas;
  font-size: 3rem;
  margin-top: 100px;
  text-align: center;
  z-index: 10;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Index() {
  return (
    <Layout>
      <Container>
        <Title>
          Managed Assets Portal
        </Title>
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