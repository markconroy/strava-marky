import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Marky's Strava</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Home</Link> | 
    <Link to="/activities/">Activities</Link> | 
    <Link to="/clubs/">Clubs</Link> | 
    <a href="https://www.strava.com/athletes/3331514"> Connect with me on Strava.</a>
  </Layout>
)

export default IndexPage
