import * as React from 'react'
import { css } from 'emotion'

interface VideoCard {
  url?: string
}

const containerStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
`
const videoStyle = css`
  width: 1000px;
  height: 800px;
  border: 5px solid #14a0ef;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 20px;
`

const titleStyle = css`
  font-family: Open Sans Condensed;
  font-weight: bold;
  font-size: 48px;
  color: #004c76;
`

const blurbStyle = css`
  font-family: Karla;
  font-size: 32px;
`

class VideoCard extends React.Component<VideoCard> {
  render() {
    return (
      <div className={containerStyle}>
        <div className={videoStyle}>
          <div className={titleStyle}>VIDEO: title will go somewhere here</div>
          <div className={blurbStyle}>
            let’s have a short one sentence blurb that tells us what the video
            is about and readers can pick if they want to watch it or not.
          </div>
        </div>
      </div>
    )
  }
}

export default VideoCard
