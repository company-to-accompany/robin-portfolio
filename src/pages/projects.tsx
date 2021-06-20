import React from "react"
import Layout from "../components/Layout"
import { Title } from "../components/Title"
import "../assets/styles/projects.css"
import ProjectHolder from "../components/ProjectHolder"

const Projects = () => {
  return (
    <Layout>
      <Title text="Robin | Projects" />
      <section id="projects">
        <article className="projects">
          <h2 className="projects-title">My projects</h2>
          <section className="projects-container">
            <div className="project-container">
              <ProjectHolder>
                <p>See project</p>
              </ProjectHolder>
              <ProjectHolder>porject 2</ProjectHolder>
            </div>
            <div className="project-container flip">
              <ProjectHolder>porject 3</ProjectHolder>
              <ProjectHolder>porject 4</ProjectHolder>
            </div>
          </section>
        </article>
      </section>
    </Layout>
  )
}

export default Projects
