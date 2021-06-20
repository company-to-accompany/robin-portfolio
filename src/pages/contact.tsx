import React from "react"
import Layout from "../components/Layout"
import { Title } from "../components/Title"
import "../assets/styles/contact.css"

const Contact = () => {
  const handleSubmit = event => {
    event.preventDefault()
  }
  return (
    <Layout>
      <Title text="Robin | Contact" />
      <section id="contact">
        <article className="contact__container">
          <h2 className="contact__title">Have questions? Need to hire me?</h2>
          <p>Submit the form and I'll reach you</p>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__input-container">
              <span>01</span>
              <input
                autoComplete="off"
                className="contact__form-input"
                type="text"
                name="name"
                id="name"
                placeholder="Type your name..."
              />
            </div>
            <div className="contact__input-container">
              <span>02</span>
              <input
                autoComplete="off"
                className="contact__form-input"
                type="email"
                name="email"
                id="email"
                placeholder="Type your email..."
              />
            </div>
            <div className="contact__input-container">
              <span>03</span>
              <input
                autoComplete="off"
                className="contact__form-input"
                type="text"
                name="message"
                id="message"
                placeholder="Type your message..."
              />
            </div>
            <div className="contact_btn-container">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
