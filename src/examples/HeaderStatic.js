import { graphql, StaticQuery } from "gatsby"
import React from "react"

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={data => <h4>{data.site.info.des}</h4>}
  ></StaticQuery>
)

export default HeaderStatic
