import React from 'react'

const ModalItemDetail = props => {
  return (
      props.currItem ? (
        <div className="modal-item-detail-container">
          <div>
            {props.currItem.title}
          </div>
          <div>
            Available: {props.currItem.available}
          </div>
          <div>
            Loan ends in: {props.currItem.term_remaining}
          </div>
        </div>
      ) : null 
  )
}

const DetailRow = props => {

}

export default ModalItemDetail