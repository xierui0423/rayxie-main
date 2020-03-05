import React from "react"
import Header from "../components/header/header"
import Layout from "../components/layout/layout"

export default () => (
  <Layout>
    <Header headerText="Something went wrong..." />
    <p>Oops...</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
