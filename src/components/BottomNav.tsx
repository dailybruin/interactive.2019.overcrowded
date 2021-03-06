import * as React from 'react'
import { css } from 'react-emotion'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

interface BottomNavProps {
  atBeginning: boolean
  atEnd: boolean
  prevName: string
  nextName: string
}

export class BottomNav extends React.Component<BottomNavProps> {
  handleClick = (id: string) => {
    // TODO: go to next/prev page
  }
  render() {
    return (
      <div
        className={css`
          color: black;
          font-family: 'Open Sans Condensed';
          font-style: normal;
          font-weight: bold;
          font-size: 2.5vw;
          line-height: normal;
          @media screen and (max-width: 800px) {
            font-size: 20px;
          }
        `}
      >
        <p
          className={css`
            float: left;
            padding-left: 10%;
            @media screen and (max-width: 800px) {
              padding-left: 5%;
            }
          `}
        >
          {
            <img
              className={css`
                height: 24px;
                @media screen and (max-width: 1100px) {
                  height: 20px;
                }
                @media screen and (max-width: 900px) {
                  height: 16px;
                }
              `}
              src={require('../images/left-arrow.png')}
            />
          }
          {this.props.prevName}
        </p>
        <p
          className={css`
            float: right;
            padding-right: 10%;
            @media screen and (max-width: 800px) {
              padding-left: 5%;
            }
          `}
        >
          {this.props.nextName}
          {
            <img
              className={css`
                height: 24px;
                @media screen and (max-width: 1100px) {
                  height: 20px;
                }
                @media screen and (max-width: 900px) {
                  height: 16px;
                }
              `}
              src={require('../images/right-arrow.png')}
            />
          }
        </p>
      </div>
    )
  }
}
