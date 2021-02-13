import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Img from "./Img"

const Navigation = () => {
  return (
    <header>
      <nav className="navigation">
        <Link to="/">
          <Img
            src="/logo.svg"
            alt="Tip App"
            style={{ width: "auto", height: "4rem" }}
          />
        </Link>

        <div className="navigation__actions">
          <OutboundLink
            className="navigation__link"
            href="https://forms.gle/391Vk6xm3tTBS7ty8"
            target="_blank">
            Support
          </OutboundLink>

          <Link to="/privacy" className="navigation__link">
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Navigation
