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

        <h2 className="mt-16 mb-8 text-left text-4xl">Content and Social Media Marketing Manager</h2>
        <p>Position Type: Part Time (Contractor)</p>
        <p>Compensation: $25/hr</p>
        <p>Location: Remote (Illinois)</p>

        <p className="mt-6">Total Web Connections is looking for a motivated individual to join our team as a content and Social Media
          Manager. Your role will be to create our content schedule for a variety of web properties, as well as create content for, and manage,
          our social media presence.
        </p>

        <h3 className="mt-8">Job Duties</h3>
        <ul>
          <li>- Provide ideas for articles and written content.</li>
          <li>- Develop social media and content marketing strategies.</li>
          <li>- Create and post social media content across multiple channels</li>
          <li>- Evaluate progress and provide updates</li>
          <li>- Brainstorm new content marketing oppurtunies</li>
          <li>- Work with our team to implement stratgies</li>
        </ul>

        <p className="mt-8">The ideal canidate is a self-starter and eager to learn. We are ideally looking for someone with some prior social 
          media experience, personal or professional, and a willingness to learn. If you have any SEO experience that's a plus, but not required.
        </p>

        <p className="mt-8">Note that this is a part time, contract position to start. Anticipated workload is about 10 hours per week to start, with room to grow from there. This is a remote position with occasional in person meetings (no more than 1-2 times per month if that).</p>

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
