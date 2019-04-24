import * as React from 'react'
import { css } from 'react-emotion'

interface SectionHeaderProps {
  subtitle: string;
  subtext?: string;
  subtext2?: string;
}

class SectionHeader extends React.Component<SectionHeaderProps> {
  render() {
    return (
      <div>
        <div className={css`
          height: 214px;
          `}
        >
        </div>
        <div className={css`
          position: absolute;
          margin-top: 31px;
          background: rgba(196, 196, 196, 0.5);
          width: 90vw;
          padding-right: 5vw;
          padding-left: auto;
          text-align: right;
          font-family: 'Open Sans';
          font-size: 120px;
          font-style: italic;
          line-height: 1.75;
          height: 88px;
          letter-spacing: -0.05em;
          right: 0px;
          @media (max-width: 1150px) {
            font-size: 80px;
            height: 60px;
          }
          @media (max-width: 750px) {
            font-size: 60px;
            height: 55px;
          }
          @media(max-width: 560px) {
            font-size: 40px;
            height: 45px;
          }
          @media(max-width: 375px ) {
            font-size: 36px;
            height: 35px;
            line-height: 1.2;
          }
          `}
        >
          {this.props.subtitle}

        </div>
        <div className={css`
          position: absolute;
          width: 80vw;

          padding-right: 5vw;
          padding-left: auto;
          text-align: right;
          font-family: 'Open Sans';
          font-size: 120px;
          font-style: italic;
          line-height: .95;
          height: 77px;
          letter-spacing: -0.05em;
          right: 0vw;
          background: rgba(255, 180, 138, 0.7);
          @media (max-width: 1150px) {
            font-size: 80px;
            height: 55px;
          }
          @media (max-width: 750px) {
            font-size: 60px;
            height: 40px;
          }
          @media(max-width: 560px) {
            font-size: 40px;
            height: 35px;
          }
          @media(max-width: 375px ) {
            font-size: 36px;
            height: 31px;
          }
          `}
        >
            <div className={css`
            position: relative;
            top: -5vh;
            @media(max-width: 750px) {
              top: -2vh;
            }

            `}
            >
              OVERCROWDED
            </div>
          </div>
          <div className={css`
            height: 200px;
            @media (max-width: 1150px) {
              height: 140px;
            }
            @media (max-width: 750px) {
              height: 110px;
            }
            @media(max-width: 560px) {
              height: 85px;
            }
            @media(max-width: 375px ) {
              height: 80px;
            }
            `}
          >
          </div>
          <div className={css`font-family: Open Sans Condensed;
                              font-style: normal;
                              font-weight: 300;
                              font-size: 24px;
                              line-height: normal;
                              text-align: right;
                              padding: 0vw 5vw 10vh 55vw;
                              @media (max-width: 1150px) {
                                font-size: 20px;
                                padding-top:
                              }
                              @media (max-width: 750px) {
                                font-size: 12px;
                              }
                              @media(max-width: 560px) {
                                font-size: 10px;
                              }
                              @media(max-width: 375px ) {
                                font-size: 8px;
                              }`}>
          {this.props.subtext2}
          </div>
      </div>
    )


  }
}

export default SectionHeader
