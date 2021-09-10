import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { thePixelArtist } from '../../portfolio/thePixelArtist'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | The Pixel Artist" />
      <WorkPage project={thePixelArtist} />

    </Layout>
  )
}

export default BlogIndex
