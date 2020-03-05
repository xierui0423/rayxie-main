import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Header from "../components/header/header"
import Layout from "../components/layout/layout"
import { Markdown } from "react-showdown"

export default ({ data }) => {
  // Client-side Runtime Data Fetching
  const [dynamicPosts, setArticles] = useState({ data: { articles: [] } })

  // useEffect(() => {
  //   // get data from GitHub api
  //   fetch(`https://strapi.rayxie.me/graphql`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: `{ articles {
  //       title
  //       content
  //       id
  //     } }`})
  //   })
  //     .then(response => response.json()) // parse JSON from request
  //     .then(resultData => {
  //       setArticles(resultData)
  //     }) // set data for the number of stars
  // }, []);

  return (
    <Layout>
      <h1>What do you get when you multiply six by nine?</h1>
      <ul>
        {data.strapi.articles.map((article, index) => (
          <li key={article.id}>
            <a href={`/posts/${article.id}`}>
              {" "}
              {article.title}
            </a>
          </li>
        ))}
        {/* {dynamicPosts.data.articles.map((article, index) => (
        <li key={article.id}>
          <h4> {article.title}</h4>
          <Markdown markup={article.content} />
        </li>
      ))} */}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    strapi {
      articles {
        title
        content
        id
      }
    }
  }
`
