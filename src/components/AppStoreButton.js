import React, { useState } from "react";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const AppStoreButton = ({ href, invert }) => {
  const [hasFocus, setHasFocus] = useState(false);
  const color = invert ? "white" : "black";

  const styles = {
    root: {
      display: "inline-block",
      width: "14.4rem",
      height: "4.8rem",
      borderRadius: "0.6rem",
      outline: "none",
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
    },
  };

  const handleFocus = () => {
    setHasFocus(!hasFocus);
  };

  return (
    <OutboundLink
      rel='noopener noreferrer'
      style={styles.root}
      href={href}
      target='_blank'
      onFocus={handleFocus}
      onBlur={handleFocus}
    >
      <img
        style={styles.image}
        width='120'
        height='40'
        src={`/app-store-download-${color}.svg`}
        alt='Download from the App Store'
      />
    </OutboundLink>
  );
};

AppStoreButton.propTypes = {
  invert: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

export default AppStoreButton;
