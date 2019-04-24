import * as React from 'react'
import { graphql } from 'gatsby'
import { ArticleTitle } from '../components/ArticleTitle'
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
import { DUMMY_DO_NOT_USE_THIS_OR_YOU_WILL_BE_FIRED_Navbar } from '../components/Navbar'

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
const IndexPage = ({ data }) => (
  <>
    {/* <Head {...data.site.siteMetadata} /> */}
    <DUMMY_DO_NOT_USE_THIS_OR_YOU_WILL_BE_FIRED_Navbar />
    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition={XPosition.Center}
      yPosition={YPosition.Center}
    />
    <ArticleTitle
      title="TITLE OF ARTICLE GOES HERE"
      byline="A BYLINE GOES HERE"
      isMobile={false}
    />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
