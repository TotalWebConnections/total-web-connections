import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import SubHero from "../components/SubHero"
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
      <SubHero header="Contact." copy={null}/>
      <div className="text-center py-28 max-w-5xl m-auto px-4 md:px-0 text-xl ">
        <p>Have a question or just want to chat? Get in Touch with us at <a href="email:info@totalwebconnections.com">info@totalwebconnections.com</a>.
           If you're interested in starting a project please include the details of what you're looking for, your timeline, and budget.
        </p>
      </div>
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
