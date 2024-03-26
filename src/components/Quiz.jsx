import React, { useState } from 'react'
import Question from './Question'
import './Quiz.css'
import resultImgPass from '../components/images/pass.gif'
import resultImgFail from '../components/images/fail.gif'
import congrats from '../components/images/congratulations.png'
import QuestionCounter from './common/QuestionCounter'
import ResultFooter from './common/ResultFooter'

function Quiz({ questions , img , topic , page }) {

  const pagination_pages = questions.length
  const [current, setCurrent] = useState(1)
  const [answer , setAnswer] = useState({})
  const [score, setScore] = useState(0);
  const [pop ,  setPop] = useState(false)

  const handlePrev = () => {
    if(current > 1){
      setCurrent(current - 1)
    }
  }

  const handleNext = () =>{
    if(current < pagination_pages){
      setCurrent(current + 1)
    }
  }

  const handleChange = (qno, ans) =>{
    setAnswer(prev=>({
      ...prev,
      [qno]:ans
    }))
  }

  const handleSubmit = (e) =>{
      e.preventDefault()
      let newScore = 0;
      questions.forEach(x=>{
          const questionNumber = x.qno
          const userAnswer = answer[questionNumber]
          const actualAnswer =  x.ans
          if(userAnswer && userAnswer === actualAnswer){
            newScore+=1
          }
      })
      setScore(newScore);
      setPop(true)
    }

  return (
    <React.Fragment>
      <div className='container'>
        <div className='logo-container'>
          <img className='inside_logo' src={img} alt="java img" />
        </div>
        <div style={{display:"flex",justifyContent:"end"}}>
            <button type='submit' onClick={handleSubmit} className='_btn btn-submit'>Submit</button>
        </div>
      </div>
    <div className='questionContainer container'>
      <QuestionCounter count={current} />
    <form>

    <Question
    ques={questions[current-1]}
    handleChange={handleChange}
    selectedOpt={answer[current]}
    />

      <div className='btn-container'>
        <div className='row' style={{width:"100%"}}>
          <div className='btn-parent col-6' style={{display:"flex",justifyContent:"start"}}>
            <button type='button' 
              className='_btn btn-prev' 
              onClick={handlePrev}
              disabled={current === 1}
              >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
            <div className='btn-parent col-6' style={{display:"flex",justifyContent:"end"}}>
            <button type='button' 
              className='_btn btn-next' 
              onClick={handleNext}
              disabled={current === pagination_pages}
              >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        </div>
      </div>
    </form>
    </div>
    <div className={pop  ? `result unhide` : 'result hide'}>
        <div className='result-container'>
              <div className='row' id='row'>
                  <div className='col-12'>
                      <img src={score > 6 ? resultImgPass : resultImgFail} className='result-bg' alt="resilt img" />
                  </div>
                  <div className='col-12 result-right'>
                     <p className='text-center mt-2 mb-2  result_text'>Result</p>
                     {
                     score <= 6 ? <p className='text-center'><em className='regration '>Try  Again!</em></p> : <p className='text-center'><em className='congr'>Congratulations <img className='congrats_img' src={congrats} alt="congrats img" /></em></p>
                     }
                  <div className='result_score_container'>
                    <div className='result_circle'>
                      <p className='mt-2 result_score text-center'>{score}</p>
                      <hr className='mt-3 hr'/>
                      <p className='result_score text-center'>{questions.length}</p>
                      </div>
                  </div>
                     <ResultFooter topic={topic} page={page} />
                  </div>
              </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Quiz