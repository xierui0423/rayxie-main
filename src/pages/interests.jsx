import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header/header"
import Layout from "../components/layout/layout"
import { Markdown } from "react-showdown"

export default ({ data }) => (
  <Layout>
    <Header headerText="Interests" />
    <p>Under Construction...</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
