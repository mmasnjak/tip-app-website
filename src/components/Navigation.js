import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "./Img";

const Navigation = () => {
  return (
    <header>
      <nav class='navigation'>
        <Link to='/'>
          <Img
            src='/logo.svg'
            alt='Tip App'
            style={{ width: "auto", height: "4rem" }}
          />
        </Link>

        <div className='navigation__actions'>
          <OutboundLink
            className='navigation__link'
            href='mailto:&#104;&#101;&#108;&#112;&#064;&#116;&#105;&#112;&#045;&#097;&#112;&#112;&#046;&#099;&#111;&#109;?subject=Help'
            target='_blank'
          >
            Support
          </OutboundLink>

          <Link to='/privacy' className='navigation__link'>
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navigation;
