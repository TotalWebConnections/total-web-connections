import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo.png"

const BlogCard = ({post}) => {
  console.log(post)
  const { frontmatter } = post;
  return (
    <div
      className="BlogCard transition-all"
    >
      <div
        className="bg-cover bg-center"
        style={{height: "215px", backgroundImage: `url('/images/posts/${frontmatter.image}')`}}
      >
      </div>
      <div className="py-4 px-2">
        <p>{ frontmatter.date }</p>
        <h3 className="text-xl">{ frontmatter.title }</h3>
      </div>
    </div>
  )
}

export default BlogCard
