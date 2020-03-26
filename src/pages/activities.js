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
            <ul>
              <li>Completed: {edge.node.activity.when_date} at {edge.node.activity.when_time}</li>
              <li>Moving time: {edge.node.activity.moving_time} seconds</li>
              <li>Distance of {edge.node.activity.distance} metres</li>
            </ul>
          </li>
        </Fragment>
      ))}
    </ol>
    <Link to="/">Home</Link> | 
    <Link to="/activities/">Activities</Link> | 
    <Link to="/clubs/">Clubs</Link> | 
    <a href="https://www.strava.com/athletes/3331514"> Connect with me on Strava.</a>
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
            when_date: start_date(formatString: "MMMM DD, YYYY")
            when_time: start_date(formatString: "H:m")
            type
            moving_time
            distance
          }
        }
      }
    }
  }
`