import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from '../components/nav'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Nav />
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`, padding: `40px`, fontFamily:'Helvetica', position: `absolute`, bottom: 0
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https:romanapf.com">RAPF</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
