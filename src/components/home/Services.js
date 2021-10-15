import * as React from "react"
import { Link } from "gatsby"

import Button from '../Button';


const Services = () => {
  const [slide, setSlide] = React.useState(0);

  return (
    <div className="pt-24 text-white">
      <div className="py-16 text-center bg-primary">
        <div className="max-w-2xl px-4 mx-auto">
          <h2 className="text-5xl">WEBSITES</h2>
          <p className="my-8 text-xl">
            A place for your business to live online. Beautiful, functional sites uniquely designed for your brand.
            We work to find the best solution to help you grow while staying under budget.
          </p>
          <Button text="Start A Site" />
        </div>
      </div>
      <div className="py-24 text-center bg-secondary">
        <div className="max-w-2xl px-4 mx-auto">
          <h2 className="text-5xl">MOBILE APPS</h2>
          <p className="my-8 text-xl">
            Custom applications designed with mobile users in mind. We'll assist in the design and development, and work to help
            you launch your app on popular app stores.
          </p>
          <Button text="Start An App" />
        </div>
      </div>
      <div className="py-24 text-center bg-primary">
        <div className="max-w-2xl px-4 mx-auto">
          <h2 className="text-5xl">CUSTOM SOFTWARE</h2>
          <p className="my-8 text-xl">
            For complex use cases we offer completely custom application development. We'll work with you to
            define all the key technologies needed, setup databases, and help with deployment.
          </p>
          <Button text="Build A Solution" />
        </div>
      </div>

    </div>
  )
}

export default Services
