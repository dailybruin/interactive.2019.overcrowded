import * as React from 'react'
import { css } from 'react-emotion'

interface QAprops {
  question: string
  answer: string
  even: boolean
}

const odd = css`
  background-color: #f2f2f2;
  border-radius: 20px 0 0 20px;
`
const even = css`
  background-color: #fff;
`
const question = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 910px;
  font-style: italic;
  font-weight: bold;
  color: #004c76;
`
const answer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 944px;
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
      color: #000000;
      display: flex;
      flex-direction: column;
      margin-left: 96px;
      padding: 10px 0px 70px 60px;
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
