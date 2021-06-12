import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../assets/styles/home.css"

export default function Home() {
  return (
    <Layout>
      <section id="home" className="home">
        <h1 className="home__header">
          <mark className="home__header-highlight">Hello</mark>, I'm a software
          developer
        </h1>
        <h1 className="home__header">based in India.</h1>
        <p className="home__description">I'm always open for freelance work.</p>
        <div className="home__contact">
          <Link className="btn" to="/contact">
            Contact me
          </Link>
        </div>
      </section>
    </Layout>
  )
}
