import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { simpleGoalsTracker } from '../../portfolio/simpleGoalsTracker'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | Simple Goals Tracker" />
      <WorkPage project={simpleGoalsTracker} />

    </Layout>
  )
}

export default BlogIndex
