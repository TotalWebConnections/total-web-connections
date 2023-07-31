import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import SubHero from "../components/SubHero"
import { projects } from "../portfolio/projects"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const copy =
    "We're proud of our work. Check out some of our previous and ongoing projects."
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Total Web Connections | Our Work" />
      <SubHero header="Our Past Projects" copy={copy} />
      <div className="grid grid-cols-1 sm:grid-cols-2 text-white">
        {projects.map(project => {
          return (
            <div
              className="bg-cover bg-center relative overflow-hidden WorkBlock"
              key={project.name}
              style={{
                backgroundImage: `url('/images/portfolio/${project.image}')`,
                height: "230px",
              }}
            >
              <Link to={`/work/${project.localUrl}`} itemProp="url">
                <div
                  className="absolute h-full w-full"
                  style={{ backgroundColor: "rgba(64, 78, 91, 0.9)" }}
                ></div>
                <div className="relative z-10 flex items-center h-full">
                  <h3
                    className="text-3xl text-secondary p-4"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
                  >
                    {project.name}
                  </h3>
                  <p className="absolute transition-all pl-4 WorkBlock__copy">
                    {project.excerpt}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
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
