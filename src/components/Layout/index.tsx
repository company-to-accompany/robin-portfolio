import React, { FC } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout: FC = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
