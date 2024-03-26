import React from 'react';
import './Question.css';

function Question({ ques , handleChange , selectedOpt }) {
  const handleChangeQ = (e) =>{
      handleChange(ques.qno,e.target.value)
  }
  return (
     <div>
      <h3 className='text-start text-lg-center question mx-3'> 
        {ques.question}
      </h3>

      <div className='option_container'>
        <div className='option_ans'>
          <input 
            type="radio" 
            name={`option-${ques.qno}`} 
            value='a' 
            className='option' 
            onChange={handleChangeQ} 
            id='a' /> 
          <span className="options_left">a)</span> 
          <label 
            htmlFor='a' 
            className={selectedOpt === 'a' ? `span active` : `span`}>
              {ques.optA}
          </label>
        </div>

        <div className='option_ans'>
          <input 
            type="radio" 
            name={`option-${ques.qno}`} 
            value='b' 
            className='option' 
            onChange={handleChangeQ} 
            id='b' /> 
          <span className="options_left">b)</span>
          <label 
            htmlFor='b' 
            className={selectedOpt === 'b' ? `span active` : `span`}>
              {ques.optB}
          </label>
        </div>

        <div className='option_ans'>
          <input 
            type="radio" 
            name={`option-${ques.qno}`} 
            value='c' 
            className='option' 
            onChange={handleChangeQ} 
            id='c' /> 
          <span className="options_left">c)</span>
          <label 
            htmlFor='c' 
            className={selectedOpt === 'c' ? `span active` : `span`}>
              {ques.optC}
          </label>
        </div>

        <div className='option_ans'>
          <input 
            type="radio" 
            name={`option-${ques.qno}`} 
            value='d' 
            className='option' 
            onChange={handleChangeQ} 
            id='d' /> 
          <span className="options_left">d)</span>
          <label 
            htmlFor='d' 
            className={selectedOpt === 'd' ? `span active` : `span`}>
              {ques.optD}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Question;
