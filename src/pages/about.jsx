import React from "react"
import {graphql} from "gatsby"
import Header from "../components/header/header"
import Layout from "../components/layout/layout"
import { Markdown } from 'react-showdown';

export default ({data}) => (
  <Layout>
    <Header>About Gatsby</Header>
    <h3>About </h3>
    <ul>
    {data.strapi.articles.map((article, index)=>(
       <li key={article.id}>
          <h4> {article.title}</h4>
          <Markdown markup={ article.content } />
       </li>
    ))}
    </ul>

    <p>Such wow. Very React.</p>
  </Layout>
)

export const query = graphql`
  query{strapi {
    articles {
      title
      content
      id
    }
  }
}
`