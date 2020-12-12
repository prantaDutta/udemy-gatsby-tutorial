import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"

const Examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <p>Hello From Examples.</p>
      <Header />
      <HeaderStatic />
      <h4>Author: {author}</h4>
    </Layout>
  )
}

export const siteData = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        des: description
        title
        person {
          age
          name
        }
      }
    }
  }
`

export default Examples
