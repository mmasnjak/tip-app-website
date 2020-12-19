import React from "react"
import PropTypes from "prop-types"

const Img = ({ src, srcMedium, srcLarge, alt, style }) => (
  <picture>
    {srcLarge && <source media={`(min-width: 420px)`} srcSet={srcLarge} />}
    {srcMedium && <source media={`(min-width: 840px)`} srcSet={srcMedium} />}

    <img
      loading="lazy"
      style={{ width: "100%", ...style }}
      src={src}
      alt={alt}
    />
  </picture>
)

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcMedium: PropTypes.string,
  srcLarge: PropTypes.string,
  style: PropTypes.object,
}

export default Img
