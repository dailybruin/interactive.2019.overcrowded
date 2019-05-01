const { createHash } = require('crypto')
const fetch = require('node-fetch').default
const path = require(`path`)

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  // === GET MAP OF ARTICLES TO ISSUES
  const targetURL =
    'https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.overcrowded/'
  const mapResponse = await fetch(targetURL)
  const targetJson = await mapResponse.json()
  const { data } = targetJson
  for (page in data) {
    for (articles in data[page]) {
      let dummyArticles = data[page][articles]
      dummyArticles.forEach(article => {
        if (
          article.hasOwnProperty('content') &&
          Array.isArray(article.content)
        ) {
          article.content = article.content.map(element => {
            if (typeof element.value !== 'string') {
              element.value = JSON.stringify(element.value)
            }
            return element
          })
        }
      })
      console.log(dummyArticles)
      createNode({
        title: articles,
        articles: dummyArticles,
        children: [],
        id: createNodeId(`page-articles-${page}`),
        internal: {
          content: JSON.stringify(dummyArticles),
          contentDigest: createHash('md5')
            .update(JSON.stringify(dummyArticles))
            .digest('hex'),
          type: 'PageArticles',
        },
        parent: null,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const data = [
    {
      title: 'Growing_Pains',
      slug: 'ent.housing.aml',
      path: '/',
    },
  ]
  data.forEach(page => {
    return graphql(`
    {
      pageArticles(title: {eq: "${page.title}"}) {
        title
        articles {
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
    `).then(_ => {
      createPage({
        path: `${page.path}`,
        component: path.resolve(`./src/templates/page.tsx`),
        context: {
          term: issue.term,
          articles: issue.articles,
          coverphoto: issue.coverphoto,
          title: issue.title,
        },
      })
    })
  })
}

/*
allPageArticles {
    edges {
      node {
        title
        articles {
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
*/
