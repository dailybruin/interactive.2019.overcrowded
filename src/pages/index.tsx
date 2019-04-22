import * as React from 'react'
import { graphql } from 'gatsby'
import SectionHeader from '../components/SectionHeader'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'

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
    <Head {...data.site.siteMetadata} />
    <SectionHeader subtitle="SUBTITLE" subtext="YO" subtext2="PUT A DESCRIPTION? OF THE SECTION? GIVE LIKE A SENTENCE OR TWO, VERY SHORT NOT LONG MAYBE THIS IS OPTIONAL"/>
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
