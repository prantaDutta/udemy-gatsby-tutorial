import React from "react"
import Footer from "./Footer"
import "./layout.css"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
