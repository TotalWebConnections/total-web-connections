import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { simpleWorkPlanner } from '../../portfolio/simpleWorkPlanner'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | Simple Work Planner" />
      <WorkPage project={simpleWorkPlanner} />

    </Layout>
  )
}

export default BlogIndex
