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
import DualPhotoSlider from '../components/DualPhotoSlider';
import {css} from 'emotion'

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
    {/* <PhotoMatrix
      imageURLs={[
        "https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950",
        "https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950",
        "https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950",
        "https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950",
        "https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950",
        "https://vignette.wikia.nocookie.net/ttte/images/e/ec/MainHenryCGI.png/revision/latest?cb=20190202160950",
        "https://vignette.wikia.nocookie.net/ttte/images/8/80/MainBenCGI.png/revision/latest/scale-to-width-down/185?cb=20180924055711",
      ]}
      caption="hello my name is ligma"
    /> */}
    <div className={css`width: 100%;`}>
      <DualPhotoSlider
        titleLeft="ligma"
        titleRight="ligma"
        imageLeft="https://i.ytimg.com/vi/WTvgKd72kCs/maxresdefault.jpg"
        imageRight="http://www.westernrivers.org/images/imagebank/Smith%20River%20digital%20wallpaper%20-%201280px%20x%20720px.jpg"
        height={360}
      />
    </div>


    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition={XPosition.Center}
      yPosition={YPosition.Center}
    />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
