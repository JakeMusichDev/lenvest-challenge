import React from 'react'

const TotalCounter = props => {
  return (
    <div className="total-counter-container">
      {"Current Total Available: $" + props.total}
    </div>
  )
}

export default TotalCounter