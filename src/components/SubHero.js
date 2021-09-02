import * as React from "react"
import { Link } from "gatsby"


const SubHero = ({header, copy}) => {

  return (
    <div className="relative subHeader py-44">
      <div className="text-white text-center max-w-xl m-auto">
        <h1 className="text-5xl">{ header }</h1>
        <p className="pt-8">{ copy }</p>
      </div>
    </div>
  )
}

export default SubHero
