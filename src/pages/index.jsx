import React from "react"
import Header from "../components/header/header"
import Layout from "../components/layout/layout"

export default () => (
  <Layout>
    <Header headerText="Hello Gatsby!">
      <span>child 1</span>
      <span>child 2</span>
    </Header>


    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
