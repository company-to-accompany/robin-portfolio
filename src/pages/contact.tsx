import React from "react"
import Layout from "../components/Layout"
import { Title } from "../components/Title"

const Contact = () => {
  return (
    <Layout>
      <Title text="Robin | Contact" />
      <section id="contact">
        <article>
          <h2>Have questions? Need to hire me?</h2>
          <p>Submit the form and I'll reach you</p>
          <form>
            <div>
              <p>01</p>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <p>02</p>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <p>03</p>
              <input type="text" name="message" id="message" />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
