import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { narrativePlanner } from '../../portfolio/narrativePlanner'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | Narrative Planner" />
      <WorkPage project={narrativePlanner} />

    </Layout>
  )
}

export default BlogIndex
