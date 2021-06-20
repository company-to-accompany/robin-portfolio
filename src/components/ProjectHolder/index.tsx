import React, { useState } from "react"
import "./index.css"

const ProjectHolder = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false)

  const handleMouseEnter = () => setShowOverlay(true)
  const handleMouseLeave = () => setShowOverlay(false)

  return (
    <div
      className="project-hldr"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="border-1"></span>
      <span className="border-2"></span>
      <span className="border-3"></span>
      <span className="border-4"></span>
      {children}
      <div className={`project-overlay ${showOverlay ? "" : "hide"}`}>
        <span className="overlay-txt">See project</span>
      </div>
    </div>
  )
}

export default ProjectHolder
