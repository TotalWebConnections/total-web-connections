import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import WorkPage from "../../components/workPage"
import Seo from "../../components/seo"

import { dailyHabitTracker } from '../../portfolio/dailyHabitTracker'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Total Web Connections | Our Work | Daily Habit Tracker" />
      <WorkPage project={dailyHabitTracker} />

    </Layout>
  )
}

export default BlogIndex
