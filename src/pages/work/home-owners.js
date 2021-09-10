import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { homeOwners } from '../../portfolio/homeOwners'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | Home Owners" />
      <WorkPage project={homeOwners} />

    </Layout>
  )
}

export default BlogIndex
