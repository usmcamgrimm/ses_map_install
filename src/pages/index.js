import React from 'react'
import Layout from '../components/Layout'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

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
        <h1>
          Securitas Electronic Security
        </h1>
        <h2>
          Managed Assets Portal
        </h2>
      </Container>
    </Layout>
  )
}