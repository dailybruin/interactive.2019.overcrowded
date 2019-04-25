import * as React from 'react'
import QuestionAnswer from './QuestionAnswer'
import { css } from 'react-emotion'

interface QAWrapperProps {
  qa: any[]
}

class QuestionAnswerWrapper extends React.Component<QAWrapperProps> {
  render() {
    const qaList = this.props.qa.map((qa, idx) => (
      <QuestionAnswer
        key={idx}
        // @mindip
        even={idx % 2 === 0}
        question={qa.question}
        answer={qa.answer}
      />
    ))
    return <div>{qaList}</div>
  }
}

export default QuestionAnswerWrapper
