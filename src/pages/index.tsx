import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import QuestionAnswerWrapper from '../components/QuestionAnswerWrapper'

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
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
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
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition={XPosition.Center}
      yPosition={YPosition.Center}
    />
    <QuestionAnswerWrapper qa={qaStrings} />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
