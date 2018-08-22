import React, { Component } from 'react'
import ModalItemDetail from '../ModalItemDetail/ModalItemDetail'
import './Modal.css'

export default class Modal extends Component {
  render () {
    return (
      <div className="modal-container" style={{'display': this.props.isActive ? 'block' : 'none'}}>
        <div onClick={this.props.closeModal}>
          x
        </div>
        <ModalItemDetail />
      </div>
    )
  }
}