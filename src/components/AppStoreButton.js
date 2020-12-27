import React from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const AppStoreButton = ({ href }) => (
  <OutboundLink
    rel="noopener noreferrer"
    style={{ outline: "none" }}
    href={href}
    target="_blank">
    <img
      width="160"
      height="54"
      src={`/app-store-download-black.svg`}
      alt="Download from the App Store"
    />
  </OutboundLink>
)

AppStoreButton.propTypes = {
  href: PropTypes.string.isRequired,
}

export default AppStoreButton
