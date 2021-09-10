import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { rpgAdventureManager } from '../../portfolio/rpgAdventureManager'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | RPG Adventure Manager" />
      <WorkPage project={rpgAdventureManager} />

    </Layout>
  )
}

export default BlogIndex
