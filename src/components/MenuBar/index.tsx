import React from "react"
import "./index.css"

export const MenuBar = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`hamburger ${open ? "open" : ""}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}
