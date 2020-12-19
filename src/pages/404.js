import React from "react"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <article className='error-page'>
      <h1>
        404
        <br />
        Page Not Found
      </h1>
      <p>Sorry we couldn’t find what you were looking for.</p>

      <p>
        <Link to='/'>Go home</Link> →
      </p>
    </article>
  )
}

export default IndexPage
