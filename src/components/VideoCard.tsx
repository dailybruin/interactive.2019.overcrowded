import * as React from 'react'
import { css } from 'emotion'
import { Video } from '@dailybruin/lux'
import AnimateHeight from 'react-animate-height'
import Arrowup from '../images/arrow-up.svg'
interface VideoCardProps {
  url?: string
}
interface VideoCardState {
  open: boolean
}

const buttonStyle = css`
  font-size: 30px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: rgba(129, 129, 129, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1, -1);
  cursor: pointer;
`

const containerStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
`
const cardStyle = css`
  width: 1000px;
  border: 5px solid #14a0ef;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 20px;
  padding: 30px 30px;
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
const videoStyle = css`
  margin: 55px 0;
  width: 100%;
`
class VideoCard extends React.Component<VideoCardProps, VideoCardState> {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }
  render() {
    return (
      <AnimateHeight duration={500} height={this.state.open ? 1000 : 500}>
        <div className={containerStyle}>
          <div className={cardStyle}>
            <div className={titleStyle}>
              VIDEO: title will go somewhere here
            </div>
            {this.state.open && (
              <div className={videoStyle}>
                <Video videoId={'5Jmce2tUn88'} />
              </div>
            )}
            <div className={blurbStyle}>
              let’s have a short one sentence blurb that tells us what the video
              is about and readers can pick if they want to watch it or not.
            </div>
            <div
              onClick={this.toggle}
              className={css`
                ${buttonStyle}
                transform: scale(1, -1) ${
                  this.state.open ? 'rotate(180deg)' : 'none'
                };
              `}
            >
              <img
                src={Arrowup}
                className={css`
                  margin: 0;
                `}
              />
            </div>
          </div>
        </div>
      </AnimateHeight>
    )
  }
}

export default VideoCard
