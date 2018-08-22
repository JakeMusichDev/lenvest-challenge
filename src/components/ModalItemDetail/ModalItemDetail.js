import React from 'react'
import './ModalItemDetail.css'
import moment from 'moment'

const getTimeRemaining = (term_remaining) => {

  
  // let futureTime = currentTime + term_remaining
  // let diffTime = futureTime - currentTime;
  // let duration = moment.duration( diffTime * 1000, 'milliseconds');
  // return duration.hours() + " hours : " + duration.minutes() +  "minutes : " + duration.seconds() + ' seconds'
}

const ModalItemDetail = props => {
  return (
      props.currItem ? (
        <div className="modal-item-detail-container">
          <div className='modal-item-detail-title'> {props.currItem.title} </div>
          <div className='modal-item-detail-entry'>Available: ${props.currItem.available}</div>
          <div className='modal-item-detail-entry'>Loan ends in: {getTimeRemaining(props.currItem.term_remaining)}</div>
        </div>
      ) : null 
  )
}

export default ModalItemDetail