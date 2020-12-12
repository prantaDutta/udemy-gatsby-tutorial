import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import img from "../images/image-4.jpeg"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} alt="jani na" width="100%" />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>Fixed Image/Blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>Fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <h2>Content</h2>
      </article>
    </section>
  )
}

export default Images
