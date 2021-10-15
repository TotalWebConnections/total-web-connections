import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import Work from "../components/home/Work"
import Blog from "../components/home/Blog"
import Process from "../components/home/Process"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Total Web Connections" />
      <Hero />
      <div className="text-center py-28 max-w-5xl m-auto px-4 md:px-0">
        <h2 className="text-5xl pb-8">SOFTWARE. WEBSITES. APPS.</h2>
        <h4 className="text-xl pb-8 border-b-2 border-secondary">
          Total Web Connections is a bespoke software development partener in the Chicago suburbs. We offer services to small and mid sized businsses looking to streamline their operations through custom software.
        </h4>
      </div>
      <Services />
      <Work />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
