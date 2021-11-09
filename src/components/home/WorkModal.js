import * as React from "react"
import { Link } from "gatsby"
import { projects } from '../../portfolio/projects'


const WorkModal = ({active, onClose}) => {

  return (
    <div
      className={`WorkModal fixed h-full w-full flex justify-center items-center ${active ? "active" : null}`}
      style={{background: "rgba(6,22,36,0.65)"}}
    >
      <div className="WorkModal__inner h-3/4 bg-white w-9/12">
        <p onClick={() => onClose(false)}>X</p>
      </div>
    </div>
  )
}

export default WorkModal
