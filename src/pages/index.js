import React from "react"
import { ExampleButton } from "../components/Button"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "green", textTransform: "uppercase" }}>
        Hello From gatsby
      </h1>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
