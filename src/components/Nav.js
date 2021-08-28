import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo.png"

const Nav = () => {

  return (
    <div className="text-white fixed px-4 py-4 z-10 w-full" style={{background: "linear-gradient(to left, #2780c1, #00487C)"}}>
      <div className="max-w-6xl m-auto flex justify-between">
        <a href="/"><img src={Logo} width="220px" /></a>
        <div className="flex items-center header-bold">
          <ul>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="#">Home</a></li>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="#">Services</a></li>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="#">Work</a></li>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="#">Blog</a></li>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
