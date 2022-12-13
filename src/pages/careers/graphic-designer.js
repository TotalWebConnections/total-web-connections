import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Button from '../../components/Button'

import SubHero from "../../components/SubHero"
import Services from "../../components/home/Services"
import Work from "../../components/home/Work"
import Blog from "../../components/home/Blog"
import Process from "../../components/home/Process"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Total Web Connections | SMM Manager" />
      <SubHero header="Careers." copy={null}/>
      <div className="py-28 max-w-5xl m-auto px-4 md:px-0 text-xl ">

        <h2 className="mt-16 mb-8 text-left text-4xl">Graphic Designer (Web/Mobile)</h2>
        <p>Position Type: Part Time (Contractor)</p>
        <p>Compensation: $20-30/hr</p>
        <p>Location: Remote</p>

        <p className="mt-6">Total Web Connections is looking for a motivated individual to join our team as a graphic designer. We are looking for a 
        designer interesed in working on a variety of projects from websites to mobile apps. We have a variety of ongoing websites/apps in need of sprucing up, as well
        as new projects still in the idea phase. 
        </p>

        <h3 className="mt-8">Job Duties</h3>
        <ul>
          <li>- Design mockups for developers.</li>
          <li>- Work on mobile and web applications.</li>
          <li>- Design websites and new ideas for existing properties.</li>
          <li>- Work with developers to ensure adherence to design.</li>
        </ul> 

        <p className="mt-8">Note that this is a part time, contract position to start. This is a remote role.</p>

        <p className="mt-8">To Apply, <a className="text-primary" href="mailto:info@totalwebconnections.com">email us at info@totalwebconnections</a> and attach your resume.</p>

    
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
