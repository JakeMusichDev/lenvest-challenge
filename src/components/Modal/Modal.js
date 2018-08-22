import React, { Component } from 'react'
import './Modal.css'

import ModalForm from '../ModalForm/ModalForm'
import ModalItemDetail from '../ModalItemDetail/ModalItemDetail'

export default class Modal extends Component {

  render () {
    const {currItem, setFormValue, closeModal, isActive} = this.props
    const visibilityStyle = {'display': isActive ? 'flex':'none'}
    return (
      <div className="modal-container" style={visibilityStyle}>

        <div className="modal-body">
          <h3>Invest in Loan</h3>
          <CloseButton close={closeModal} />
          <ModalItemDetail currItem={currItem} />
          <ModalForm setFormValue={setFormValue} />
        </div>

      </div>
    )
  }
}

const CloseButton = props => {
  return (
    <div onClick={props.close} className="modal-close-btn-container">
      <div> 
        ✕ 
      </div>
    </div>
  )
}