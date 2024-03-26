import React from 'react'

function ResultFooter({ page }) {
  const handleRetry = () => {
    localStorage.setItem('currentPage', JSON.stringify(page));
    window.location.reload();
}
const handleNext = () => {
  localStorage.setItem('currentPage', JSON.stringify(0));
  window.location.reload();
}
  return (
    <div className='result_btns'>
        <button onClick={handleRetry} className='btn_retry'>Retake</button>
        <button onClick={handleNext} className='btn_next'>Next</button>
    </div>
  )
}

export default ResultFooter