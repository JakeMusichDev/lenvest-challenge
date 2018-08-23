import React from 'react'
import './ModalItemDetail.css'

import {getTimeRemaining} from '../../utils/getTimeRemaining'

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