import * as React from "react"
import { Link } from "gatsby"

import Button from '../Button';


const Services = () => {
  const [slide, setSlide] = React.useState(0);

  return (
    <div className="mt-32 py-24 bg-gray">
      <h2 className="text-4xl text-center">Our Services</h2>
      <div className="grid grid-cols-3 max-w-4xl mx-auto">
        <div className="service-card">
          <h3 className="text-2xl">
            Web Development
          </h3>
          <p>
            A place for your business to live online. Beautiful, functional sites uniquely designed for your brand.
          </p>
        </div>
        <div className="service-card">
          <h3 className="text-2xl">
            App Development
          </h3>
          <p>
            For complex functional needs. Database driven and optimized from design to the code to be effcient.
          </p>
        </div>
        <div className="service-card">
          <h3 className="text-2xl">
            Mobile Applications
          </h3>
          <p>
            Dedicated solutions for mobile devices. Custom designed to work on mobile devices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
