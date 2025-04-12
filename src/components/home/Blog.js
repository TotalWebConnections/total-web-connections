import * as React from "react"
import { Link } from "gatsby"
import BlogCard from "../BlogCard"

const Blog = ({ posts }) => {
  return (
    <div className="text-center py-28 max-w-5xl m-auto px-4 md:px-0">
      <h3 className="text-4xl font-bold text-center">Recent News</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl m-auto py-16 px-4 md:px-0">
        {posts.map(post => {
          return (
            <Link to={post.fields.slug} itemProp="url">
              <BlogCard post={post} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Blog
