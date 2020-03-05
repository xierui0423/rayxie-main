import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children, hideNav }) =>{
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return <div className="main-container" style={{ padding: "2rem" }}>
  <header>
    {!hideNav && <nav>
      <ul>
        <ListLink to="/">Home</ListLink>  
        <ListLink to="/posts/">Posts</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </nav>}
  </header>
  <main >
    {/* <h1>{data.site.siteMetadata.title}</h1> */}
    {children}
  </main>
  </div>;
}
  

