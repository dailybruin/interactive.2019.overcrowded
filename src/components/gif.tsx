import * as React from 'react'
import { css } from 'react-emotion'
import { Byline } from '@dailybruin/lux'
import ExpandMore from '@material-ui/icons'

export enum XPosition {
  Left = 'start',
  Center = 'center',
  Right = 'end',
}

export enum YPosition {
  Top = 'start',
  Center = 'center',
  Bottom = 'end',
}

interface GifPhotoProps {
  headline: string
  imageURL: string
  imageCredit: string
  authors: string[]
  xPosition: XPosition
  yPosition: YPosition
  darken?: number
  style?: string
  explainer?: string
  textColor: string
}

export default class GifPhoto extends React.Component<GifPhotoProps> {
  public static defaultProps = {
    darken: 0,
    textColor: '#fff',
  }
  private helloRef = React.createRef<HTMLDivElement>()

  public render() {
    const textAlign =
      this.props.xPosition === XPosition.Center
        ? 'center'
        : this.props.xPosition === XPosition.Left
        ? 'left'
        : 'right'

    return (
      <div>
        <div
          className={css`
            width: 100%;
            height: 80vh;
            background: linear-gradient(
                rgba(0, 0, 0, ${this.props.darken}),
                rgba(0, 0, 0, ${this.props.darken})
              ),
              url('https://media.giphy.com/media/AiPHa8Drgklos/giphy.gif');
            /* background-repeat: no-repeat; */
            background-size: cover;
            background-position: center;
            display: flex;

            color: ${this.props.textColor};
            align-items: flex-end;
            justify-content: center;

            ${this.props.style}
          `}
        >
          <div
            className={css`
              margin-left: auto;
            `}
          >
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />

            <h1
              className={css`
                font-size: 4.5rem;
                letter-spacing: -0.05em;
                font-family: 'Open Sans';
                font-style: italic;
                margin-bottom: auto;
                margin-right: 2rem;
              `}
            >
              {this.props.headline}
            </h1>
          </div>
        </div>
        <div
          className={css`
            width: 100%;
            height: 20vh;
            background-color: #ffffff;
          `}
        >
          <p
            className={css`
              color: #004c76;
              font-style: normal;
              font-weight: bold;
              font-size: 15px;
              margin-top: 1rem;
              text-align: right;
              margin-right: 2rem;
            `}
          >
            a five part series
          </p>
          <div
            className={css`
              display: flex;
              margin-right: 2rem;
            `}
          >
            <div
              className={css`
                margin-left: 2rem;
                margin-right: 2rem;
              `}
            >
              <button
                type="button"
                className={css`
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
                onClick={() => {
                  if (this.helloRef && this.helloRef.current) {
                    this.helloRef.current.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <i class="material-icons">keyboard_arrow_down</i>
              </button>
            </div>

            <p
              className={css`
                color: #000000;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;

                text-align: right;
              `}
            >
              a blurb giving overview into what this is and why we are writing
              this and i think I spelled soemthign wrong but thats okay i'm just
              filling space space space, a blurb giving overview into what this
              is and why we are writing this and I think I spelled soemthing
              wrong but thats okay.
            </p>
          </div>
        </div>
        <div ref={this.helloRef} />
      </div>
    )
  }
}
