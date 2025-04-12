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
        <div className="grid md:grid-cols-3 max-w-5xl mx-auto">
          <div
            className=" bg-gray transition-all Card p-4 mx-2 rounded-3xl border my-8"
            style={{ borderColor: "#c7cdce" }}
          >
            <div className="block text-center md:text-left">
              <img
                className="rounded-3xl  mx-2"
                src="/images/portfolio/indoor-gardens.jpg"
                width="100%"
                alt="The Indoor Gardens"
              />
              <div className="pl-6 pt-4 md:pt-0">
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
            className="bg-gray transition-all Card p-4 mx-2 rounded-3xl border my-8"
            style={{ borderColor: "#c7cdce" }}
          >
            <div className="block text-center md:text-left">
              <img
                className="rounded-3xl px-2 mx-auto"
                src="/images/portfolio/history.png"
                width="50%"
                alt="Here Be History"
              />
              <div className="pl-6 pt-4 md:pt-0">
                <h2 className="text-2xl font-bold pb-4">Here Be History</h2>
                <p className="pb-4">
                  Learn history through quizzes and upcoming interactive
                  content.
                </p>
                <a
                  className="text-primary"
                  href="https://www.herebehistory.com"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div
            className=" bg-gray transition-all Card p-4 mx-2 rounded-3xl border my-8"
            style={{ borderColor: "#c7cdce" }}
          >
            <div className="block text-center md:text-left">
              <img
                className="rounded-3xl pt-4 md:pt-0"
                src="/images/portfolio/writeProgress.jpg"
                width="100%"
                alt="Write Progress"
              />
              <div className="pl-6">
                <h2 className="text-2xl font-bold pb-4">Write Progress</h2>
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
            className=" bg-gray transition-all Card p-4 mx-2 rounded-3xl border my-8"
            style={{ borderColor: "#c7cdce" }}
          >
            <div className="block text-center md:text-left">
              <img
                className="rounded-3xl pt-4 md:pt-0"
                src="/images/portfolio/my-daily-fortune.jpg"
                width="100%"
                alt="My Daily Fortune"
              />
              <div className="pl-6">
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
