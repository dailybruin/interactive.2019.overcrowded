const { createHash } = require('crypto')
const fetch = require('node-fetch').default
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const data = [
    {
      sub: 'Housing',
      slug: '*housing*',
      path: '/housing',
    },
    {
      sub: 'Tech',
      slug: '*tech*',
      path: '/tech',
    },
  ]
  data.forEach(page => {
    return graphql(`
    {
      allKerckhoffArticle(filter: {title: {glob: "${page.slug}"}}) {
        edges {
          node {
            title
            author
            coverAlt
            coverImg
            headline
            coverCredit
            content {
              type
              value
            }
          }
        }
      }
    }
    `).then(result => {
      createPage({
        path: `${page.path}`,
        component: path.resolve(`./src/templates/section.tsx`),
        context: {
          slug: page.slug,
          sub: page.sub,
        },
      })
    })
  })
}
