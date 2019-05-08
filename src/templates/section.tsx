import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, Image } from '@dailybruin/lux'
import { Navbar } from '../components/Navbar'
import SectionHeader from '../components/SectionHeader'
import { css } from 'react-emotion'

export const query = graphql`
  query($slug: String!) {
    allKerckhoffArticle(filter: { title: { glob: $slug } }) {
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
`

// {.image}
// credit: Jintak Han/Daily Bruin Contributor,
// alt: barretto and car,
// url: https://drive.google.com/open?id=1RwppOM5Ru1NPQNHWileIsOVf1LHmG05j,
// caption: Barretto, who is finishing up his last quarter at UCLA, wakes up extra early for the hour long drive to campus.
// {}

export default ({ data, pageContext }) => {
  console.log(data)
  console.log('context: ', pageContext)
  // const articles = data.pageArticles.articles
  // const Subheading = props => <h2 className={css``}>{props.text}</h2>
  // console.log(articles[0].content)
  // console.log(articles[1].content)
  return (
    <>
      {/* <Navbar
        title={pageContext.title}
        entries={[
          { id: '1', title: 'Overcrowd' },
          { id: '2', title: 'Overcrowd' },
          { id: '3', title: 'Overcrowd' },
          { id: '4', title: 'Overcrowd' },
          { id: '5', title: 'Overcrowd' },
        ]}
        selectedId={'1'}
      />
      <SectionHeader subtitle={'Overcrowded'} />
      <div>{pageContext.title}</div>
      {articles.map((article, idx) => {
        return (
          <Article
            content={article.content}
            customTypeComponentMapping={{
              subheading: Subheading,
              image: Image,
            }}
          />
        )
      })} */}
    </>
  )
}
