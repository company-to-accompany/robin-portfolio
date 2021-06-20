import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import { Title } from "../components/Title"

const NotFound = () => {
  return (
    <Layout>
      <Title text="Robin | Page not found" />
      <section className="page-not-found">
        <h1 className="notfound__title">Page not found</h1>
        <Link className="notfound__link" to="/">
          Go to Home
        </Link>
      </section>
    </Layout>
  )
}

export default NotFound
