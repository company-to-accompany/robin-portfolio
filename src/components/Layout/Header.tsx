import React, { useState } from "react"
import { Link } from "gatsby"
import { useWindowSize } from "../../hooks/useWindowSize"

import "./Header.css"
import { MenuBar } from "../MenuBar"

const Header = () => {
  const [windowSize] = useWindowSize()
  const [open, setOpen] = useState(false)

  const showMenu = windowSize.width > 768 || open

  console.log({ windowSize })
  return (
    <header className="header">
      <nav className="nav">
        <Link className="nav__title" to="/">
          Robin Baskaran
        </Link>
        <MenuBar open={open} setOpen={setOpen} />
        <ul className={`nav__list ${showMenu ? "" : "d-none"}`}>
          <li className="nav__item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav__item">
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
