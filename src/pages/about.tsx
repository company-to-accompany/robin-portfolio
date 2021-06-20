import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Title } from "../components/Title"
import StyledButton from "../components/StyledButton"
// @ts-ignore
import image from "../assets/img/robin.jpg"

import "../assets/styles/about.css"

const About = () => {
  return (
    <Layout>
      <Title text="Robin | About" />
      <section id="about">
        <article className="aboutme">
          <div className="aboutme__item aboutme__left">
            <figure className="aboutme__img-container">
              <img src={image} alt="Robin Baskaran" />
            </figure>
          </div>
          <div className="aboutme__item aboutme__right">
            <h2 className="aboutme__title">About me</h2>
            <p className="aboutme__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              doloremque necessitatibus esse placeat dolores, corrupti unde
              quidem est rem quo deleniti nam. Incidunt dolorum consequatur
              natus rerum perferendis sapiente assumenda quidem ab beatae
              tempore deleniti quos, porro dolore est, nihil quaerat facere
              numquam fugit dolor, odio illum mollitia? Non culpa illo ducimus
              consectetur dolorem eaque dolorum recusandae. Ea vitae libero
              numquam sed maxime! Nulla odit ut placeat, iure, consectetur,
              officiis non inventore debitis cum optio consequuntur quod
              expedita ea at. Accusantium, id? Nisi deleniti quia corrupti
              voluptate, accusantium fuga quod eligendi voluptatem facere
              consectetur quos sit explicabo officia eaque excepturi.
            </p>
            <Link className="btn" to="/contact">
              Contact me
            </Link>
          </div>
        </article>
        <article className="skills">
          <h2 className="skills__title">Skills & Tools</h2>
          <ul className="skills_list">
            <li className="skills_list-item">
              <StyledButton text="HTML" />
            </li>
            <li className="skills_list-item">
              <StyledButton text="CSS" />
            </li>
            <li className="skills_list-item">
              <StyledButton text="Javascript" />
            </li>
            <li className="skills_list-item">
              <StyledButton text="React Js" />
            </li>
            <li className="skills_list-item">
              <StyledButton text="Node Js" />
            </li>
            <li className="skills_list-item">
              <StyledButton text="Git" />
            </li>
          </ul>
        </article>
      </section>
    </Layout>
  )
}

export default About
