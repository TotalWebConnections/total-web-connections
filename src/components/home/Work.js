import * as React from "react"
import { Link } from "gatsby"
import { projects } from '../../portfolio/projects'
import WorkModal from './WorkModal'

const Work = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [activeProject, setActiveProject] = React.useState(null)

  const onProjectClick = (id) => {
    setModalOpen(true)
    setActiveProject(projects[id])
  }

  return (
    <div>
      <WorkModal activeProject={activeProject} active={modalOpen} onClose={setModalOpen}/>
      <div className="mx-auto pt-28">
        <h2 className="text-4xl font-bold text-center">What We've Done</h2>
        <p className="text-center mb-4 text-xl">A sample sample of the projects we've worked and the brands we own.</p>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3">
          <div className="WorkItem bg-white transition-all"  onClick={() => onProjectClick(1)} >
            <div className="overflow-hidden relative">
              <img src="/images/portfolio/indoor-gardens.jpg" width="100%" />
              
              <div 
                className="WorkItem__content px-2 text-center absolute top-0 text-black h-full w-full flex flex-col justify-center"
                style={{background: "rgba(0,0,0,.75)"}}
                >
                <p className="text-white text-lg font-bold">The Indoor Gardens - Gardening Focus Static Blog</p>
              </div>
            </div>
          </div>
          <div className="WorkItem md:mt-0 bg-white transition-all hover:text-white"   onClick={() => onProjectClick(0)}>
            <div className="overflow-hidden relative">
              <img src="/images/portfolio/simple-lead-tracker.jpg" width="100%" />
              <div 
                className="WorkItem__content px-2 text-center absolute top-0 text-black h-full w-full flex flex-col justify-center"
                style={{background: "rgba(50,50,50,.55)"}}
                >
                <p className="text-white text-lg font-bold">Simple Lead Tracker - Simple to use CMS for freelancers</p>
              </div>
            </div>
          </div>
          <div className="WorkItem md:mt-0 bg-white transition-all hover:text-white"  onClick={() => onProjectClick(2)}>
            <div className="overflow-hidden relative">
              <img src="/images/portfolio/narrative-planner.jpg" width="100%" />
              <div 
                className="WorkItem__content px-2 text-center absolute top-0 text-black h-full w-full flex flex-col justify-center"
                style={{background: "rgba(0,0,0,.75)"}}
                >
                <p className="text-white text-lg font-bold">Narrative Planner - World building software for everyone</p>
              </div>
            </div>
          </div>

          <div className="WorkItem md:mt-0 bg-white transition-all hover:text-white"  onClick={() => onProjectClick(3)}>
            <div className="overflow-hidden relative">
              <img src="/images/portfolio/narrative-planner.jpg" width="100%" />
              <div 
                className="WorkItem__content px-2 text-center absolute top-0 text-black h-full w-full flex flex-col justify-center"
                style={{background: "rgba(0,0,0,.75)"}}
                >
                <p className="text-white text-lg font-bold">Homeowners DIY Guide - Blog For First Time Homebuyers</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Work
