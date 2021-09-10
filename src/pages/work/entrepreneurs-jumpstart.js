import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { entrepreneursjumpstart } from '../../portfolio/entrepreneursjumpstart'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | Entrepreneurs Jumpstart" />
      <WorkPage project={entrepreneursjumpstart} />

    </Layout>
  )
}

export default BlogIndex
