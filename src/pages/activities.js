import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ActivitiesPage = ({ data }) => (
  <Layout>
    <SEO title="Mark Conroy Strava Activities" />
    <h1>My {data.allStravaActivity.edges.length} Activities</h1>
    <p>Click an activity title for more information about that activity</p>
    <ol>
      {data.allStravaActivity.edges.map(edge => (
        <Fragment>
          <li>
            <h2><Link to={`/activities/${edge.node.activity.id}`}>{edge.node.activity.name}</Link></h2>
            <p>Completed {edge.node.activity.start_date} with a moving time of {edge.node.activity.moving_time} seconds, covering a distance of {edge.node.activity.distance} metres.</p>
          </li>
        </Fragment>
      ))}
    </ol>
    <Link to="/">Home</Link> | 
    <Link to="/activities/">Activities</Link> | 
    <Link to="/clubs/">Clubs</Link>
  </Layout>
)

export default ActivitiesPage

export const ActivitiesPageQuery = graphql`
  {
    allStravaActivity(sort: {order: DESC, fields: activity___start_date}) {
      edges {
        node {
          activity {
            name
            id
            start_date(fromNow: true)
            type
            moving_time
            distance
          }
        }
      }
    }
  }
`