import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

const ListLink = props => (
  <li>
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

  return <div className="main-container">
  <header>
    {!hideNav && <nav>
      <ul>
        <ListLink to="/">Home</ListLink>  
        <ListLink to="/posts/">Posts</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </nav>}
  </header>
  <main>
    <div className={`${hideNav ? '' : 'content-wrapper'}`}>
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      {children}
    </div>
  </main>
  </div>;
}
  

