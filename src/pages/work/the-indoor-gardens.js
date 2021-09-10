import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { theIndoorGardens } from '../../portfolio/theIndoorGardens'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | The Indoor Gardens" />
      <WorkPage project={theIndoorGardens} />

    </Layout>
  )
}

export default BlogIndex
