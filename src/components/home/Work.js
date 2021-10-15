import * as React from "react"
import { Link } from "gatsby"
import { projects } from '../../portfolio/projects'


const Work = () => {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {featuredProjects.map((project, index) => {
          const isRed = index % 2 !== 0;
          return (
            <div key={index} className="relative Home__workItem" style={{backgroundImage: "url('/images/preview.jpg')", backgroundSize: "cover", height: "300px"}}>
              <Link to={`/work/${project.localUrl}`} itemProp="url">
                <div className={`Home__workItem__overlay w-full h-full text-white flex align-center flex-col justify-center text-center ${isRed ? "red" : ""}`}>
                  <div className="Home__workItem__content">
                    <h3 className="text-4xl">{project.name}</h3>
                    <h4>Type</h4>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
