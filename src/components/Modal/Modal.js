import React, { Component } from 'react'
import ModalItemDetail from '../ModalItemDetail/ModalItemDetail'
import './Modal.css'

export default class Modal extends Component {
  render () {
    console.log(this.props);
    return (
      <div className="modal-outer-container" style={{'display': this.props.isActive ? 'block' : 'none'}}>
        <div className="modal-inner-container">
          <div onClick={this.props.closeModal}>
            x
          </div>
          <ModalItemDetail currItem={this.props.currItem} />
        </div>
      </div>
    )
  }
}