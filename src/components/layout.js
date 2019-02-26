import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import '../scss/style.scss'

import { Location } from '@reach/router';
import Nav from "./layout/Nav"
import Header from "./layout/Header"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Nav />
        <Location>
          {({ location }) => (<Header location={location} />)}
        </Location>

        <main>{children}</main>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
