import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { simpleLeadTracker } from '../../portfolio/simpleLeadTracker'

const BlogIndex = ({location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work" />
      <WorkPage project={simpleLeadTracker} />

    </Layout>
  )
}

export default BlogIndex
