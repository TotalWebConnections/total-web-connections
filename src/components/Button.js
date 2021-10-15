import * as React from "react"
import { Link } from "gatsby"
import Nav from './Nav'
import Footer from './Footer'

const Button = ({ text, url }) => {


  return (
    <span className="Button border border-white inline-block py-3 px-5 rounded hover:bg-white hover:text-primary transition-all">
      <h4 className="text-2xl">{ text }</h4>
    </span>
  )
}

export default Button
