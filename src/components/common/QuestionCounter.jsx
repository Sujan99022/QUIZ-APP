import React from 'react'
import './QuestionCounter.css'

function QuestionCounter({ count }) {
  return (
    <div className='question_counter'>
        <p className='question_counter_text'>Question { count } of 10</p>
    </div>
  )
}

export default QuestionCounter