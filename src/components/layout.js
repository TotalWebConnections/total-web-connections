import * as React from "react"
import { Link } from "gatsby"
import Nav from './Nav'
import Footer from './Footer'

import '@fortawesome/fontawesome-free/js/all.js';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
