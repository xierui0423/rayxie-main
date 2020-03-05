import React from "react"
import Header from "../components/header/header"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"

export default () => (
  <Layout hideNav={true}>
    <h1>Glad you are here!</h1>
    <p>
      This is Ray, I'm a{" "}
      <Link to="/resume.pdf" title="resume">
        software developer
      </Link>{" "}
      living in Chengdu, China.
    </p>
    <p>
      I am fond of <Link to="posts?cat=game">video and board games</Link>,
      sports, science and technology.
    </p>
    <p>
      Help yourself to <Link to="posts">look around </Link> or{" "}
      <Link to="contact">hit me up.</Link>
    </p>
  </Layout>
)
