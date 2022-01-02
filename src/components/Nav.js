import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo.png"

// <ul>
//   <li className="inline-block px-3 transition-all hover:text-secondary"><a href="/blog">Blog</a></li>
//   <li className="inline-block px-3 transition-all hover:text-secondary"><a href="/contact">Contact</a></li>
// </ul>

const Nav = () => {

  return (
    <div className="text-white absolute px-4 py-4 z-10 w-full">
      <div className="max-w-6xl m-auto flex justify-between">
        <a href="/"><img src={Logo} width="220px" /></a>
        <div className="flex items-center header-bold">

        </div>
      </div>
    </div>
  )
}

export default Nav
