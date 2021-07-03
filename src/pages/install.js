import React from 'react'
import Layout from '../components/Layout'

export default function Install({ location }) {
  return (
    <Layout>
      <h1>
        Install Page
          <span>
            {location.pathname}
          </span>
      </h1>
      <h2>Static HTML Page</h2>
      <p>Install Checklist</p>
    </Layout>
  )
}