import React from 'react'
import Layout from '../components/Layout'

export default function Login({ location }) {
  return (
    <Layout>
      <h1>
        Welcome to the Login Page 
          <span>
            {location.pathname}
          </span>
      </h1>
    </Layout>
  )
}