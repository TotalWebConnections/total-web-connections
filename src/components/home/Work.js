import * as React from "react"
import { Link } from "gatsby"
import { projects } from "../../portfolio/projects"
import WorkModal from "./WorkModal"

const Work = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [activeProject, setActiveProject] = React.useState(null)

  const onProjectClick = id => {
    setModalOpen(true)
    setActiveProject(projects[id])
  }

  return (
    <div>
      <div className="mx-auto pt-28">
        <h2 className="text-4xl font-bold text-center">Our Work</h2>
        <p className="text-center mb-4 text-xl">
          A small sample of the apps and sites we own and market.
        </p>
        <div>
          <div
            className=" bg-gray transition-all Card w-3/4 mx-auto p-16 rounded-3xl border my-16"
            style={{ borderColor: "#c7cdce" }}
          >
            <div className="block md:flex text-center md:text-left">
              <img
                className="rounded-3xl  md:w-3/5 mx-2"
                src="/images/portfolio/indoor-gardens.jpg"
                width="100%"
                alt="The Indoor Gardens"
              />
              <div className="md:w-2/5 pl-6 pt-4 md:pt-0">
                <h2 className="text-2xl font-bold pb-4">The Indoor Gardens</h2>
                <p className="pb-4">Gardening Focused Content Site. </p>
                <a
                  className="text-primary"
                  href="https://www.theindoorgardens.com"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div
            className=" bg-gray transition-all Card w-3/4 mx-auto p-16 rounded-3xl border my-16"
            style={{ borderColor: "#c7cdce" }}
          >
            <div className="block md:flex text-center md:text-left">
              <img
                className="rounded-3xl md:w-3/5 px-2"
                src="/images/portfolio/simple-lead-tracker.jpg"
                width="100%"
                alt="Simple Lead Tracker"
              />
              <div className="md:w-2/5 pl-6 pt-4 md:pt-0">
                <h2 className="text-2xl font-bold pb-4">Simple Lead Tracker</h2>
                <p className="pb-4">
                  Easy to use CMS built for small businesses and freelancers.
                </p>
                <a
                  className="text-primary"
                  href="https://www.simpleleadtracker.com"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div
            className=" bg-gray transition-all Card w-3/4 mx-auto p-16 rounded-3xl border my-16"
            style={{ borderColor: "#c7cdce" }}
          >
            <div className="block md:flex text-center md:text-left">
              <img
                className="rounded-3xl md:w-3/5 pt-4 md:pt-0"
                src="/images/portfolio/writeProgress.jpg"
                width="100%"
                alt="Write Progress"
              />
              <div className="md:w-2/5 pl-6">
                <h2 className="text-2xl font-bold pb-4">Write Progres</h2>
                <p className="pb-4">
                  Web app for helping writers track their writing, stay
                  consistent, and become better at their craft.
                </p>
                <a
                  className="text-primary"
                  href="https://www.writeprogress.com"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div
            className=" bg-gray transition-all Card w-3/4 mx-auto p-16 rounded-3xl border my-16"
            style={{ borderColor: "#c7cdce" }}
          >
            <div className="block md:flex text-center md:text-left">
              <img
                className="rounded-3xl md:w-3/5 pt-4 md:pt-0"
                src="/images/portfolio/my-daily-fortune.jpg"
                width="100%"
                alt="My Daily Fortune"
              />
              <div className="md:w-2/5 pl-6">
                <h2 className="text-2xl font-bold pb-4">My Daily Fortune</h2>
                <p className="pb-4">
                  Mobile app that gives you a brand new fortune everday. Check
                  back each day for a new fortune.
                </p>
                <a
                  className="text-primary"
                  href="https://apps.apple.com/za/app/my-daily-fortune/id1246080962"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
