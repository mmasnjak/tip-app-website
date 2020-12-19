import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, image, appId }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const seo = {
    title: title ? `${title} — ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={seo.title}>
      <meta name="description" content={seo.description} />

      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="2732057453736895" />

      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:creator" content="@m_masnjak" />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="apple-itunes-app" content="app-id=1476974703"></meta>
    </Helmet>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  appId: PropTypes.string,
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl
      }
    }
  }
`
