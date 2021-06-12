import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Title } from "../components/Title"

const About = () => {
  return (
    <Layout>
      <Title text="Robin | About" />
      <section id="about">
        <article>
          <figure>
            <img src="" alt="Robin Baskaran" />
          </figure>
          <div>
            <h2>About me</h2>
            <p>description</p>
            <Link to="/contact">Contact me</Link>
          </div>
        </article>
        <article>
          <h2>Skills & Tools</h2>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React Js</li>
              <li>Node Js</li>
              <li>Git</li>
            </ul>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default About
