import * as React from "react"
import { Link } from "gatsby"

const Process = () => {

  return (
    <div className="py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
        <div className="px-4">
          <h3 className="text-5xl pb-8">What To Expect</h3>
          <div className="py-2 pl-8 blueDot relative">
            <h4 className="text-2xl">Discovery Call</h4>
            <p>Start with a quick call to see if we're a good fit and talk about the specifics of your project.</p>
          </div>
          <div className="py-2 pl-8 blueDot relative">
            <h4 className="text-2xl">Design</h4>
            <p>We take the time to understand your vision and come up with a solution that solves your problems and fits your budget.</p>
          </div>
          <div className="py-2 pl-8 blueDot relative">
            <h4 className="text-2xl">Development</h4>
            <p>We take an itterative approach with weekly updates to keep you in the loop. You'll always know where your project stands.</p>
          </div>
          <div className="py-2 pl-8 blueDot relative">
            <h4 className="text-2xl">Support</h4>
            <p>Lastly, we'll help get your project live and provide ongoing support as needed.</p>
          </div>
        </div>
        <div>
          <img src="/images/preview2.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Process
