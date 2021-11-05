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

import About from "../images/about.png"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Total Web Connections" />
      <Hero />
      <div className="grid grid-cols-2 gap-4 pt-32 max-w-5xl mx-auto">
        <div>
          <h2 className="text-5xl pb-4">SOFTWARE. WEBSITES. APPS.</h2>
          <h4 className="text-xl">
            Total Web Connections is a bespoke software development partener in the Chicago suburbs. We offer services to small and mid sized businsses looking to streamline their operations through custom software.
          </h4>
        </div>
        <div>
          <img src={About} width="400px" alt="About Total Web Connections"/>
        </div>
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
