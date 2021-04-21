import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import "../components/base.scss"
import Navigation from "../components/Navigation"

const Layout = ({ children, location }) => {
  const year = new Date().getFullYear()

  return (
    <Fragment>
      <Navigation />

      <main>{children}</main>

      <footer className="main-footer">
        &copy; 2020 – {year}{" "}
        <OutboundLink href="https://markomasnjak.com" target="_blank">
          Marko&nbsp;Masnjak
        </OutboundLink>
      </footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default Layout
