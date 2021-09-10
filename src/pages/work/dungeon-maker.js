import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { dungeonMaker } from '../../portfolio/dungeonMaker'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | Dungeon Maker" />
      <WorkPage project={dungeonMaker} />

    </Layout>
  )
}

export default BlogIndex
