import React from "react"
import { Helmet } from "react-helmet"

export const Title = ({ text }) => {
  return (
    <Helmet>
      <title>{text}</title>
    </Helmet>
  )
}
