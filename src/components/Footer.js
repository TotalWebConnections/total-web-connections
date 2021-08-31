import * as React from "react"
import { Link } from "gatsby"

import Map from './Map'

const Footer = () => {

  return (
    <div>
      <div className="bg-secondary text-white text-center py-12">
        <div className="max-w-sm m-auto">
          <h3 className="text-xl pb-4">Get In Touch</h3>
          <p className="pb-4">
            Interested in getting your project started off right? Then Drop Us a Line! We're always happy to discuss new projects and help launch dreams!
          </p>
          <button>Contact</button>
        </div>
      </div>
      <Map />
      <div className="bg-primary text-white text-center py-2">
        <p>© 2021 Total Web Connections. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
