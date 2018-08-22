import React, { Component } from 'react'
import './Modal.css'

import ModalForm from '../ModalForm/ModalForm'
import ModalItemDetail from '../ModalItemDetail/ModalItemDetail'

export default class Modal extends Component {
  render () {
    console.log(this.props);
    return (
      <div className="modal-outer-container" style={{'display': this.props.isActive ? 'block' : 'none'}}>
        <div className="modal-inner-container">
          <div onClick={this.props.closeModal}>
            x
          </div>
          <h3>Invest in Loan</h3>
          <ModalItemDetail currItem={this.props.currItem} />
          <ModalForm />
        </div>
      </div>
    )
  }
}