import React from "react"
import "./index.css"

const StyledButton = ({ text }) => {
  return (
    <div className="styled-btn">
      <span className="border-1"></span>
      <span className="border-2"></span>
      <span className="border-3"></span>
      <span className="border-4"></span>
      {text}
    </div>
  )
}

export default StyledButton
