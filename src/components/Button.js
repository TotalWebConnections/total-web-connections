import * as React from "react"
import { Link } from "gatsby"
import Nav from './Nav'
import Footer from './Footer'

const Button = ({ text, url }) => {


  return (
    <a href={url}>
      <span className="Button mt-4 border border-primary bg-primary text-white inline-block py-3 px-8 rounded hover:bg-white hover:text-primary transition-all">
        <h4 className="text-2xl">{ text }</h4>
      </span>
    </a>
  )
}

export default Button
