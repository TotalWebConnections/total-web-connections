import * as React from "react"
import { Link } from "gatsby"
import { projects } from '../../portfolio/projects'


const WorkModal = ({active, onClose, activeProject}) => {

  return (
    <div
      className={`WorkModal fixed h-full w-full flex justify-center items-center ${active ? "active" : null}`}
      style={{background: "rgba(6,22,36,0.65)"}}
    >
      <div className="WorkModal__inner h-3/4 bg-white w-9/12 p-4">
        <p onClick={() => onClose(false)}>X</p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl">{ activeProject?.name }</h2>
            <p className="text-lg">{ activeProject?.description }</p>
          </div>
          <div>
            <img src={`/images/portfolio/${activeProject?.image}`} width="90%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkModal
