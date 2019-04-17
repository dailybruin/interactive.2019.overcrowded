import * as React from 'react'
import QuestionAnswer from './QuestionAnswer'
import { css } from 'react-emotion'

interface QAWrapperProps {
  qa: any[]
}

class QuestionAnswerWrapper extends React.Component<QAWrapperProps> {
  render() {
    let even = true
    let k = 0
    const qaList = this.props.qa.map(qa => (
      <QuestionAnswer
        key={(k += 1)}
        // don't @ me
        even={(even = !even)}
        question={qa.question}
        answer={qa.answer}
      />
    ))
    return <div>{qaList}</div>
  }
}

export default QuestionAnswerWrapper
