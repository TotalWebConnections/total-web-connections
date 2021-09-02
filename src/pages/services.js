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

  const copy = "Our goal is to provide you with all the services you need for your web business in one convenient spot. From the initial design, to the copy on your site, we’re here to help you every step of the way. A list of our most common services is below. Don’t see what you need? Drop us a line and will work with your individual needs.";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Total Web Connections" />
      <SubHero header="One Stop. Everything You Need." copy={copy}/>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white">
        <div className="ServiceBlock text-center" style={{backgroundImage: "url('/images/development.jpeg')"}}>
          <a href="#">
            <div className="py-28">
              <h2 className="text-3xl">Web Development</h2>
              <p className="pt-4">Custom Web Software</p>
            </div>
          </a>
        </div>
        <div className="ServiceBlock text-center" style={{backgroundImage: "url('/images/mobile.jpeg')"}}>
          <a href="#">
            <div className="py-28">
              <h2 className="text-3xl">Mobile Apps</h2>
              <p className="pt-4">Your Message On All Devices</p>
            </div>
          </a>
        </div>
        <div className="ServiceBlock text-center" style={{backgroundImage: "url('/images/applications.jpeg')"}}>
          <a href="#">
            <div className="py-28">
              <h2 className="text-3xl">Online Marketing</h2>
              <p className="pt-4">Custom Strategies For High Growth</p>
            </div>
          </a>
        </div>
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
