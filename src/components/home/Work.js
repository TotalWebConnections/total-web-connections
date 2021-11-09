import * as React from "react"
import { Link } from "gatsby"
import { projects } from '../../portfolio/projects'
import WorkModal from './WorkModal'

const Work = () => {
  console.log(projects)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [activeProject, setActiveProject] = React.useState(null)

  const onProjectClick = (id) => {
    setModalOpen(true)
    setActiveProject(projects[id])
  }

  return (
    <div>
      <WorkModal activeProject={activeProject} active={modalOpen} onClose={setModalOpen}/>
      <div className="max-w-4xl mx-auto py-28">
        <h2 className="text-4xl">What We've Done</h2>
        <div className="grid grid-cols-3">
          <div onClick={() => onProjectClick(1)} >
            <p>The Indoor Gardens - Gardening Focus Static Blog</p>
          </div>
          <div onClick={() => onProjectClick(0)}>
            <p>Simple Lead Tracker - Simple to use CMS for freelancers</p>
          </div>
          <div onClick={() => onProjectClick(2)}>
            <p>Narrative Planner - World building software for everyone</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
