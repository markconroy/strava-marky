import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ClubsPage = ({ data }) => (
  <Layout>
    <SEO title="Mark Conroy Strava Activities" />
    <h1>My {data.stravaAthlete.athlete.clubs.length} Clubs</h1>
    <p>Click on a club name to go to that club's Strava page.</p>
    <ol>
      {data.stravaAthlete.athlete.clubs.map(club => (
        <Fragment>
          <li>
            <a href={`https://www.strava.com/clubs/${club.url}`}>{club.name}  {!club.private ? true : '- Private Group'}</a>
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

export default ClubsPage

export const ClubsPageQuery = graphql`
  {
    stravaAthlete {
      athlete {
        clubs {
          name
          url
          private
        }
      }
    }
  }
`