import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { myDailyFortune } from '../../portfolio/myDailyFortune'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | My Daily Fortune" />
      <WorkPage project={myDailyFortune} />

    </Layout>
  )
}

export default BlogIndex
