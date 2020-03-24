import React from "react"
import Link from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Home</Link> | 
    <Link to="/activities/">Activities</Link> | 
    <Link to="/clubs/">Clubs</Link>
  </Layout>
)

export default NotFoundPage
