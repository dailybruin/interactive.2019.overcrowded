import * as React from 'react'
import { graphql } from 'gatsby'
import { ArticleTitle } from '../components/ArticleTitle'
import { BottomNav } from '../components/BottomNav'
import {
  Article,
  Byline,
  CoverPhoto,
  Footer,
  Head,
  Headline,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import DualPhotoSlider from '../components/DualPhotoSlider'
import QuestionAnswerWrapper from '../components/QuestionAnswerWrapper'
import PhotoMatrix from '../components/PhotoMatrix'
import GifPhoto from '../components/gif'
import { Navbar } from '../components/Navbar'
import { DUMMY_DO_NOT_USE_THIS_OR_YOU_WILL_BE_FIRED_Navbar } from '../components/Navbar'
import VideoCard from '../components/VideoCard'
import SectionHeader from '../components/SectionHeader'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
    allKerckhoffArticle(filter: { title: { glob: "*housing*" } }) {
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
const qaStrings = [
  {
    question:
      'Blah blah blah blah ask my question there is a question that goes here and it might be long or not long? my question there is a question that goes here and it might be long or not longmy question there is a question that goes here and it might be long or not long',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac nunc eget felis lobortis dictum vel in sem. Nullam quis vehicula metus. Maecenas sapien magna, porta lacinia fermentum ut, aliquet in neque. Aliquam erat volutpat. Nunc vestibulum arcu nibh, eu placerat eros consectetur et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam aliquet sit amet magna id iaculis. Maecenas dignissim, leo fermentum pellentesque fringilla, dui tellus dapibus magna, ut dapibus justo est non augue. Praesent nec neque faucibus, euismod sem eget, fringilla odio. Aenean convallis fermentum sapien a posuere. Fusce odio dui, pharetra a aliquam quis, hendrerit at mi. Sed volutpat efficitur mauris, et volutpat ipsum aliquet a. Nunc suscipit neque quis lobortis pharetra. Donec maximus metus velit, quis mollis tortor blandit',
  },
  {
    question:
      'Blah blah blah blah ask my question there is a question that goes here and it might be long or not long?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac nunc eget felis lobortis dictum vel in sem. Nullam quis vehicula metus. Maecenas sapien magna, porta lacinia fermentum ut, aliquet in neque. Aliquam erat volutpat. Nunc vestibulum arcu nibh, eu placerat eros consectetur et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam aliquet sit amet magna id iaculis. Maecenas dignissim, leo fermentum pellentesque fringilla, dui tellus dapibus magna, ut dapibus justo est non augue. Praesent nec neque faucibus, euismod sem eget, fringilla odio. Aenean convallis fermentum sapien a posuere. Fusce odio dui, pharetra a aliquam quis, hendrerit at mi. Sed volutpat efficitur mauris, et volutpat ipsum aliquet a. Nunc suscipit neque quis lobortis pharetra. Donec maximus metus velit, quis mollis tortor blandit',
  },
  {
    question:
      'Blah blah blah blah ask my question there is a question that goes here and it might be long or not long?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac nunc eget felis lobortis dictum vel in sem. Nullam quis vehicula metus. Maecenas sapien magna, porta lacinia fermentum ut, aliquet in neque. Aliquam erat volutpat. Nunc vestibulum arcu nibh, eu placerat eros consectetur et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam aliquet sit amet magna id iaculis. Maecenas dignissim, leo fermentum pellentesque fringilla, dui tellus dapibus magna, ut dapibus justo est non augue. Praesent nec neque faucibus, euismod sem eget, fringilla odio. Aenean convallis fermentum sapien a posuere. Fusce odio dui, pharetra a aliquam quis, hendrerit at mi. Sed volutpat efficitur mauris, et volutpat ipsum aliquet a. Nunc suscipit neque quis lobortis pharetra. Donec maximus metus velit, quis mollis tortor blandit',
  },
]
const IndexPage = ({ data }) => {
  const articles = []
  data.allKerckhoffArticle.edges.forEach(edge => {
    articles.push(edge.node)
  })
  const Subheading = props => <h2>{props.text}</h2>
  return (
    <>
      <Head {...data.site.siteMetadata} siteName={'Overcrowded'} />
      <GifPhoto
        headline={'Overcrowded'}
        authors={[]}
        imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
        yPosition={YPosition.Center}
      />
      <Navbar
        title={'Housing'}
        entries={[
          { id: 'housing', title: 'Housing' },
          { id: 'tech', title: 'Tech' },
          { id: '3', title: 'Part 3' },
          // { id: 'international', title: 'International' },
          { id: '4', title: 'Part 4' },
          { id: '5', title: 'Part 5' },
        ]}
        selectedId={'housing'}
      />
      <SectionHeader subtitle={'HOUSING'} />
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

export default IndexPage
