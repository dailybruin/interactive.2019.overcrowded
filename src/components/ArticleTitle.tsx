import * as React from 'react'
import { Byline, Headline, styles } from '@dailybruin/lux'
import { css } from 'react-emotion'

interface ArticleTitleProps {
  title: string
  byline: string
  isMobile: boolean
}

interface ArticleTitleState {
  textColor: string
  backgroundColor: string
}

export class ArticleTitle extends React.Component<
  ArticleTitleProps,
  ArticleTitleState
> {
  constructor(props) {
    super(props)
    this.state = { textColor: 'white', backgroundColor: 'rgb(0, 76, 118)' }
  }
  render() {
    return (
      <div
        className={css`
          color: ${this.state.textColor};
          background: ${this.state.backgroundColor};
          padding: 30px;
          background-clip: padding-box;
          padding-left: 25%;
          width: 75%;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          @media screen and (max-width: 500px) {
            align-content: center;
            border-radius: 0px;
            width: 100%;
            padding: 10px;
          }
        `}
      >
        <div
          className={css`
            font-family: 'Open Sans Condensed';
            font-style: normal;
            font-weight: bold;
            font-size: 64px;
            line-height: normal;
            h1 {
              margin-bottom: 0px;
            }
            @media screen and (max-width: 500px) {
              font-size: 48px;
            }
          `}
        >
          <Headline text={this.props.title} />
        </div>
        <div
          className={css`
            font-family: 'Open Sans';
            font-style: italic;
            font-weight: 300;
            font-size: 32px;
            line-height: normal;
            @media screen and (max-width: 500px) {
              font-size: 24px;
            }
          `}
        >
          <Byline authors={this.props.byline} />
        </div>
      </div>
    )
  }
}
