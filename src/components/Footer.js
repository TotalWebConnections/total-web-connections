import * as React from "react"
import { Link } from "gatsby"

import Map from './Map'

import Logo from "../images/logo.png"

const Footer = () => {

  return (
    <div>
      <div className="bg-darkBlue text-white text-center py-16">
        <div className="max-w-3xl m-auto">
          <p className="text-3xl">
            Interested in getting your project started off right? Then Drop Us a Line!
          </p>
          <p className="pt-4">We're always happy to discuss new projects and help launch dreams!</p>
          <button>Contact</button>
        </div>
      </div>
      <div className="bg-primary text-white text-center py-2">
        <div className="grid grid-cols-3 max-w-4xl mx-auto">
          <div>
            <a href="/"><img src={Logo} width="220px" /></a>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
            <h4>Contact Us</h4>
            <ul>
              <li>Info@totalwebconnections.com</li>
              <li>Based in Winfield, IL</li>
            </ul>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
