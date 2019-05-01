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
import { css } from 'react-emotion'
import QuestionAnswerWrapper from '../components/QuestionAnswerWrapper'
import PhotoMatrix from '../components/PhotoMatrix'
import GifPhoto from '../components/gif'
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
    {/* dont use percent for height */}
    <PhotoMatrix
      width="100%"
      height="100vh"
      imageURLs={[
        'https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950',
        'https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950',
        'https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950',
        'https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950',
        'https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950',
        'https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950',
        'https://vignette.wikia.nocookie.net/ttte/images/8/80/MainBenCGI.png/revision/latest/scale-to-width-down/185?cb=20180924055711',
      ]}
      caption="hello my name is ligma"
    />
    <DualPhotoSlider
      titleLeft="ligmx"
      titleRight="ligmx"
      imageLeft="https://i.ytimg.com/vi/WTvgKd72kCs/maxresdefault.jpg"
      imageRight="http://www.westernrivers.org/images/imagebank/Smith%20River%20digital%20wallpaper%20-%201280px%20x%20720px.jpg"
      heightWidthRatio={0.3}
      width="100%"
    />
    {/* <Head {...data.site.siteMetadata} /> */}
    <DUMMY_DO_NOT_USE_THIS_OR_YOU_WILL_BE_FIRED_Navbar />
    <VideoCard />
    <SectionHeader subtitle="asdf" />
    <GifPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      yPosition={YPosition.Center}
    />
    <QuestionAnswerWrapper qa={qaStrings} />
    <ArticleTitle
      title="TITLE OF ARTICLE GOES HERE"
      byline="A BYLINE GOES HERE"
    />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <BottomNav
      atBeginning={false}
      atEnd={false}
      prevName="PREV: Name here"
      nextName="NEXT: Name here"
    />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
