import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from '../components/Button'

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
      <Seo title="Total Web Connections | Careers" />
      <SubHero header="Careers." copy={null}/>
      <div className="text-center py-28 max-w-5xl m-auto px-4 md:px-0 text-xl ">
        <p>Total Web Connections is growing and looking for motivated individuals to join our team! See below for our 
          current open positions. Sent any questions to info@totalwebconnections. 
        </p>

        <h2 className="mt-16 mb-8 text-left text-4xl">Positions</h2>

        <div className="pt-8 pb-8 border-primary border-t-2 text-left flex justify-between items-center">
          <h3>Content and Social Media Manager</h3>
          <Button text="Details" url="/careers/content-smm"/>
        </div>

        <div className="pt-8 pb-8 border-primary border-t-2 text-left flex justify-between items-center">
          <h3>Graphic Designer</h3>
          <Button text="Details" url="/careers/graphic-designer"/>
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
