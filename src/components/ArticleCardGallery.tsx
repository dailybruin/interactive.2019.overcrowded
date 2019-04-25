import * as React from 'react'
import { css } from 'emotion'
import ArticleCardCustom from './ArticleCardCustom'

interface ArticleCards {
  ArticleCard: {
    imageurl: string
    hoverimage: string
    title: string
    content: string
  }[]
}

export class ArticleCardGallery extends React.Component<ArticleCards> {
  render() {
    return (
      <div>
        <div
          className={css`
            font-family: Open Sans Condensed;
            font-style: normal;
            font-weight: bold;
            font-size: 64px;
            line-height: normal;
            text-align: center;
            padding-bottom: 20px;
          `}
        >
          JUMP TO
        </div>
        <div
          className={css`
            text-align: center;
          `}
        >
          {this.props.ArticleCard.map(current => (
            <ArticleCardCustom
              imageurl={current.imageurl}
              hoverimage={current.hoverimage}
              title={current.title}
              content={current.content}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ArticleCardGallery
