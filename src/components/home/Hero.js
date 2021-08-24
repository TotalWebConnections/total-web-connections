import * as React from "react"
import { Link } from "gatsby"

import Bg  from '../../images/bg.svg'

const Hero = () => {

  return (
    <div className="relative">
      <img src={Bg} />
      <div className="absolute text-center flex flex-col w-full h-full justify-center text-3xl md:text-5xl" style={{top: "0px"}}>
        <h2 className="text-secondary header-bold">Welcome</h2>
        <h2 className="text-white">We Build Beautiful</h2>
        <h2 className="text-white">Sites And Rock Solid</h2>
        <h2 className="text-white">Applications</h2>
        <h2 className="text-white">Let's Get Started!</h2>
      </div>
    </div>
  )
}

export default Hero
