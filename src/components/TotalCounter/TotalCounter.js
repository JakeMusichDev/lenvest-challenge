import React from 'react'
import './TotalCounter.css'

const TotalCounter = props => {
  return (
    <div className="total-counter-container">
      {"Total amount available for investment: "}
      <div className='counter-value'>£{(props.total).toLocaleString('us-EN')}</div>
    </div>
  )
}

export default TotalCounter