import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import "../components/base.scss"
import Navigation from "../components/Navigation"

const Layout = ({ children, location }) => (
  <Fragment>
    <Navigation />

    <main>{children}</main>

    <footer className='main-footer'>
      &copy; 2020&nbsp;
      <OutboundLink href='https://masnjak.com' target='_blank'>
        Marko&nbsp;Masnjak
      </OutboundLink>
    </footer>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default Layout
