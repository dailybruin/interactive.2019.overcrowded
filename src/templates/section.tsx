import * as React from 'react'
import { graphql } from 'gatsby'
import { Head, Article, Image, Footer, YPosition } from '@dailybruin/lux'
import { Navbar } from '../components/Navbar'
import SectionHeader from '../components/SectionHeader'
import { ArticleTitle } from '../components/ArticleTitle'
import { css } from 'react-emotion'
import GifPhoto from '../components/gif'

export const query = graphql`
  query($query: String!) {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
    allKerckhoffArticle(filter: { title: { glob: $query } }) {
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
  const articles = []
  data.allKerckhoffArticle.edges.forEach(edge => {
    articles.push(edge.node)
  })
  const Subheading = props => <h2 className={css``}>{props.text}</h2>
  return (
    <>
      <Head {...data.site.siteMetadata} />
      {pageContext.slug == 'housing' && (
        <GifPhoto
          headline={'Overcrowded'}
          authors={[]}
          imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
          yPosition={YPosition.Center}
        />
      )}
      <Navbar
        title={pageContext.title}
        entries={[
          { id: 'housing', title: 'Housing' },
          { id: 'tech', title: 'Tech' },
          { id: '3', title: 'Part 3' },
          // { id: 'international', title: 'International' },
          { id: '4', title: 'Part 4' },
          { id: '5', title: 'Part 5' },
        ]}
        selectedId={pageContext.slug}
      />
      <SectionHeader subtitle={pageContext.sub.toUpperCase()} />
      <div>{pageContext.title}</div>
      {articles.map((article, i) => {
        console.log(article.content)
        return (
          <>
            {article.title && article.byline && (
              <ArticleTitle title={article.title} byline={article.byline} />
            )}
            <Article
              key={i}
              content={article.content}
              customTypeComponentMapping={{
                subheading: Subheading,
                image: Image,
              }}
            />
          </>
        )
      })}
      <Footer developers="" copyrightYear={2019} />
    </>
  )
}
