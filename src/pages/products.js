import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => (
          <article key={product.id}>
            <Image fluid={product.image.fluid} alt={product.title} />
            <h3>
              {product.title} <span>${product.price}</span>
            </h3>
            <Link to={`/products/${product.slug}`}>More Details</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      totalCount
      nodes {
        id
        price
        slug
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
