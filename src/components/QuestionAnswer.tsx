import * as React from 'react'
import { css } from 'react-emotion'

interface QAprops {
  question: string
  answer: string
  even: boolean
}

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
  @media (min-width: 944px) {
    width: 910px;
  }
`

const answer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 944px) {
    width: 944px;
  }
`

const largeLetter = css`
  margin-right: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
`
const text = css``

class QuestionAnswer extends React.Component<QAprops> {
  render() {
    let alternating = this.props.even ? even : odd
    const qaStyle = css`
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
        <div className={answer}>
          <div className={largeLetter}>A: </div>
          <div className={text}>{this.props.answer}}</div>
        </div>
      </div>
    )
  }
}

export default QuestionAnswer
