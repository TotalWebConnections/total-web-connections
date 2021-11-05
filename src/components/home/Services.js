import * as React from "react"
import { Link } from "gatsby"

import Button from '../Button';


const Services = () => {
  const [slide, setSlide] = React.useState(0);

  return (
    <div className="mt-32 pt-24 bg-gray">
      <h2 className="text-5xl">WEBSITES</h2>
      <p className="my-8 text-xl">
      A place for your business to live online. Beautiful, functional sites uniquely designed for your brand.
            We work to find the best solution to help you grow while staying under budget.
      </p>
    </div>
  )
}

export default Services
