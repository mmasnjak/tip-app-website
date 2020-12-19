import React, { Fragment } from "react"
import AppStoreButton from "../components/AppStoreButton"
import SEO from "../components/seo"

const Page = () => {
  return (
    <Fragment>
      <SEO />

      <section className="home">
        <article className="home__content">
          <h1>Tip is a simple gratuity&nbsp;calculator.</h1>
          <p>
            Spend less time doing math, and more time enjoying the company of
            the people you are&nbsp;with.
          </p>

          <div className="call-to-action">
            <AppStoreButton href="https://apps.apple.com/us/app/tip-gratuity-calculator/id1476974703" />
          </div>
        </article>

        <aside className="home__figure">
          <figure>
            <picture>
              <source media="(min-width: 840px)" srcSet="/device-large.png" />
              <source media="(min-width: 420px)" srcSet="/device-medium.png" />

              <img
                className="home__device"
                loading="lazy"
                src="/device-small.png"
                alt="Tip App - Calculator"
              />
            </picture>
          </figure>
        </aside>
      </section>
    </Fragment>
  )
}

export default Page
