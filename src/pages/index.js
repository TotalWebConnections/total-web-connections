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
      <div className="pt-32 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold pb-6">SOFTWARE. WEBSITES. CONTENT.</h2>
        <p className="text-xl">
          Total Web Connections is software and content development company located in the Chicago suburbs. We focus on building engaging software experiences and marketing brands. We own a variety of software and websites, and work with a select few clients to help them grow.
        </p>
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
