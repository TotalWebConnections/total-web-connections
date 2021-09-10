import * as React from "react"
import { Link } from "gatsby"
import Nav from './Nav'
import Footer from './Footer'

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
