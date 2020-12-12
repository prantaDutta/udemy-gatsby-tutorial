// import { graphql, useStaticQuery } from "gatsby"
// import React from "react"

// const Header = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           author
//           data
//           description
//           title
//           person {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       <h2>{data.site.siteMetadata.person.age}</h2>
//     </div>
//   )
// }

// export default Header

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  //   console.log(data)
  return (
    <div>
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
    </div>
  )
}

export default Header
