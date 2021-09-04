import * as React from "react"
import { Link } from "gatsby"


const WorkPage = ({project}) => {
  return (
    <div>
      <div class="py-24 subHeader text-white text-center">
        <h1
          className="text-4xl header-bold"
          style={{position: "relative", top: "32px"}}
        >
          { project.name }
        </h1>
      </div>

      <div className="text-center py-28 max-w-5xl m-auto px-4 md:px-0">
        <h2 className="text-5xl pb-8">The Project</h2>
        <p className="text-xl pb-8 border-b-2 border-secondary">{ project.description }</p>

        <h2 className="text-5xl pb-8 pt-28">The Challenge</h2>
        <p className="text-xl pb-8 border-b-2 border-secondary">{ project.challenge }</p>

        <h2 className="text-5xl pb-8 pt-28">The Solution</h2>
        <p className="text-xl pb-8 border-b-2 border-secondary">{ project.solution }</p>

        <div className="pt-28 pb-8 border-b-2 border-secondary">
          <div className="grid grid-cols-1 sm:grid-cols-3 text-white">
            {
              project.images.map(image => {
                return (
                  <div className="px-2">
                    <img src={`/images/portfolio/${image}`} />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="pt-28">
          <div className="flex pb-4">
            <h3 className="text-xl pt-1">Live Url:</h3>
            <div className="pl-2 pt-2">
              <a href={ project.url }>{project.url}</a>
            </div>
          </div>
          <div className="flex">
            <h3 className="text-xl pt-1">Tech Used:</h3>
            {
              project.tech.map(item => {
                return (
                  <div className="mx-4 px-4 text-white py-2 rounded-xl bg-primary">
                    { item }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default WorkPage
