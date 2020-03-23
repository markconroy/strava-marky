/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          activities: allStravaActivity {
            edges {
              node {
                activity {
                  id
                }
              }
            }
          }
        }
      `).then(({ data: { activities } }) => {
        activities.edges.forEach(({ node: { activity } }) => {
          createPage({
            path: `/activities/${activity.id}`,
            component: path.resolve("./src/templates/activity/index.js"),
            context: {
              id: parseInt(activity.id),
            },
          })
        })
      })
    )
  })
}
