import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__nav-item">
          <a
            href="https://github.com/RobinRockz"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className="footer__nav-item">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/robin-baskaran-294956126/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="footer__nav-item">
          <a
            rel="noreferrer"
            href="https://www.instagram.com/robin.baskar/"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li className="footer__nav-item">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/robin.baskar15"
            target="_blank"
          >
            Facebook
          </a>
        </li>
      </ul>
      <p className="footer__mail">robinbtech17@gmail.com</p>
    </footer>
  )
}

export default Footer
