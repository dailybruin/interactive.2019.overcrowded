import * as React from 'react'
import AnimateHeight from 'react-animate-height'
import { css } from 'react-emotion'

interface QAprops {
  question: string
  answer: string
  even: boolean
}

interface QAState {
  open: boolean
}

const buttonStyle = css`
  font-size: 32px;
  height: 30px;
  width: 30px;
  border-radius: 150px;
  padding-top: 3px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: rgba(129, 129, 129, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1.5, -1.5);
  margin-top: 55px;
  margin-left: 50%;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
`
const odd = css`
  background-color: #f2f2f2;
`
const even = css`
  @media (min-width: 944px) {
    background-color: #fff;
  }
  background-color: #effaff;
`

const question = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: italic;
  font-weight: bold;
  color: #004c76;
  margin: 10px 50px 25px 60px;
  @media (min-width: 1344px) {
    width: 1000px;
  }
`

const answer = css`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 10px 50px 20px 60px;
  line-height: 22px;
  @media (min-width: 1344px) {
    width: 1044px;
  }
`

const largeLetter = css`
  margin-right: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
`
const text = css``

class QuestionAnswer extends React.Component<QAprops, QAState> {
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
    let alternating = this.props.even ? even : odd
    const qaStyle = css`
      @media (max-width: 1044px) {
        margin: 18px 18px;
        border-radius: 20px;
      }
      font-family: Karla;
      display: flex;
      flex-direction: column;
      margin-left: 96px;
      margin-top: 32px;
      padding: 10px 0px 70px 60px;
      border-radius: 20px 0 0 20px;
      ${alternating}
    `
    return (
      <div className={qaStyle}>
        <div className={question}>
          <div className={largeLetter}>Q: </div>
          <div className={text}>{this.props.question}</div>
        </div>
        <div
          className={css`
            @media (max-width: 940px) {
              display: none;
            }
          `}
        >
          <div className={answer}>
            <div className={largeLetter}>A: </div>
            <div className={text}>{this.props.answer}}</div>
          </div>
        </div>
        <div
          className={css`
            @media (min-width: 940px) {
              display: none;
            }
          `}
        >
          <AnimateHeight duration={500} height={this.state.open ? 'auto' : 100}>
            <div className={answer}>
              <div className={largeLetter}>A: </div>
              <div className={text}>{this.props.answer}}</div>
            </div>
          </AnimateHeight>
          <div
            onClick={this.toggle}
            className={css`
              ${buttonStyle}
              transform: scale(1.5, -1.5) ${
                this.state.open ? 'rotate(180deg)' : 'none'
              };
            `}
          >
            ^
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionAnswer
