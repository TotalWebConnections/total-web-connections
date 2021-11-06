import * as React from "react"
import { Link } from "gatsby"
import { projects } from '../../portfolio/projects'


const Work = () => {

  return (
    <div className="max-w-4xl mx-auto py-28">
      <h2 className="text-4xl">What We've Done</h2>
      <div className="grid grid-cols-3">
        <div>
          <p>Lifting buddy - Mobile app built and deployed on iOS</p>
        </div>
        <div>
          <p>Simple Lead Tracker - Simple to use CMS for freelancers</p>
        </div>
        <div>
          <p>Worlds Crafter - World building software for everyone</p>
        </div>
      </div>
    </div>
  )
}

export default Work
