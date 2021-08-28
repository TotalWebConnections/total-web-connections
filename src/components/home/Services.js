import * as React from "react"
import { Link } from "gatsby"

import Mockup from '../../images/mockup.webp'


const Services = () => {
  const [slide, setSlide] = React.useState(0);

  return (
    <div className="py-16 max-w-6xl m-auto px-4 md:px-2">
      <div className="text-center pb-12">
        <h2 className="text-5xl">What We Do</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <img src={Mockup} width="400px" className="m-auto pb-6 md:pb-0"/>
        </div>
        <div>
          <div className="pb-4 flex justify-between header-bold text-xl">
            <h4
              className={`transition-all hover:text-primary cursor-pointer border-b pb-2
                          ${slide === 0 ? "text-primary" : null}
                          ${slide === 0 ? "border-primary" : "border-white"}`}
              onClick={() => setSlide(0)}
            >
              Websites
            </h4>
            <h4
            className={`transition-all hover:text-primary cursor-pointer border-b pb-2
                        ${slide === 1 ? "text-primary" : null}
                        ${slide === 1 ? "border-primary" : "border-white"}`}
              onClick={() => setSlide(1)}
            >
              Applications
            </h4>
            <h4
            className={`transition-all hover:text-primary cursor-pointer border-b pb-2
                        ${slide === 2 ? "text-primary" : null}
                        ${slide === 2 ? "border-primary" : "border-white"}`}
              onClick={() => setSlide(2)}
            >
              Mobile
            </h4>
          </div>
          <div
            className="textWrapper relative overflow-hidden"
            style={{height: "300px"}}
          >
            <p
              className="absolute transition-all"
              style={{left: slide === 0 ? "0px" : "100%"}}
            >
              A place for your business to live online. Beautiful, functional sites uniquely designed for your brand.
            </p>
            <p
              className="absolute transition-all"
              style={{left: slide === 1 ? "0px" : "100%"}}
            >
              For complex functional needs. Database driven and optimize from design to the code to be efficient.
            </p>
            <p
              className="absolute transition-all"
              style={{left: slide === 2 ? "0px" : "100%"}}
            >
              Dedicated solutions for mobile devices. Custom designed to work on mobile devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
