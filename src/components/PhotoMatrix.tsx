import React from 'react'
import { css, cx } from 'emotion'

interface PhotoMatrixProps {
  imageURLs: string[],
  caption: string,
  width: string,
  height: string,
}

var componentWidth = 1;
var colorInactive = 'red';
var colorActive = 'blue'

class PhotoMatrix extends React.Component<PhotoMatrixProps> {

  render() {
    const { imageURLs, caption, width, height } = this.props;
    return (
      <div className={css`
        width: ${width};
        height: ${height};
        @media (max-width: 900px) {
          height: calc(${height} * 4);
        }
      `}>
        <div className={css`
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          padding: 5px;
        `}>
          {imageURLs.map(image => (
            <div className={css`
              background: url(${image});
              background-size: cover;
              flex: 1 0 21%;
              margin: 5px;
              height: calc(50% - 10px);
              @media (max-width: 900px) {
                flex: 1 0 51%;
                height: calc(12.5% - 10px);
              }
            `}>
            </div>
          )) }
          <div className={css`
            text-align: right;
            flex: 1 0 21%;
            height: calc(50% - 10px);
            @media (max-width: 1200px) {
              font-size: 14px;
            }
            @media (max-width: 900px) {
              flex: 1 0 51%;
              font-size: 18px;
            }
            margin: 5px;
            font-family: Open Sans Condensed;
            font-style: italic;
            font-size: 18px;
            line-height: 27px;          
          `}>
            { caption }
          </div>
        </div>
      </div>
      
    )
  }
}

export default PhotoMatrix;