import * as React from "react"
import { Link } from "gatsby"
import { projects } from '../../portfolio/projects'


const WorkModal = ({active, onClose, activeProject}) => {


  return (
    <div
      className={`WorkModal fixed h-full w-full flex justify-center items-center ${active ? "active" : null}`}
      style={{background: "rgba(6,22,36,0.65)"}}
    >
      <div className="WorkModal__inner h-3/4 bg-white w-9/12 p-4 rounded-md overflow-scroll">
        <p className="text-right text-bold cursor-pointer transition hover:text-primary text-bold text-xl" onClick={() => onClose(false)}>Close X</p>
        <div class="grid md:grid-cols-2 gap-4 pt-4">
          <div>
            <h2 className="text-2xl font-bold">{ activeProject?.name }</h2>
            <p className="text-lg py-4">{ activeProject?.description }</p>
            <div>
             <h2 className="text-xl font-bold pt-4">What We Did</h2>
             <ul className="pl-2 pt-2">
              {activeProject?.services.map((service) => <li>- {service}</li>)}
             </ul>
            </div>
            <div className="pt-6">
              <a className="text-primary hover:text-black transition-all" href={activeProject?.url} target="_blank"><button className="text-bold text-xl">{activeProject?.name}</button></a>
            </div>
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
