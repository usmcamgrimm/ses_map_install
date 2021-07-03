import React from 'react'
import Layout from '../components/Layout'

export default function Index({ location }) {
  return (
    <Layout>
      <h1>Home Page 
        <span>
          {location.pathname}
        </span>
      </h1>
      <h2>Static HTML Page</h2>
    </Layout>
  )
}