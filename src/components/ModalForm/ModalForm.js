import React, { Component } from 'react'
import './ModalForm.css'

export default class ModalForm extends Component {
  constructor(props) {
    super(props)

    this.state = {inputValue: "", inputValid:false}
  }

  handleChange = e => {
    this.setState({inputValue: e.target.value})
  }

  handleSubmit = e => {
    if(this.checkInputValidity()) {
      this.props.setFormValue(this.state.inputValue)
      this.input.value = ''
    }
    e.preventDefault()
  }

  //--------------------------------------------------------
  // checkInputValidity - checks form input for valid value 
  // returns boolean representing if value is valid, and submission should continue 
  //--------------------------------------------------------
  checkInputValidity = () => {
    const {inputValue} = this.state; 
    const threshold = this.props.threshold.replace(/[^\w]/g, '')
    if(!inputValue || parseInt(inputValue,10) > parseInt(threshold,10) || !(/^[0-9]*$/.test(inputValue))) {
      alert('Invalid input, please try a numerical value.')
      this.setState({inputValue: ''})
      this.input.value = ''
      return false
    }
    return true 
  }

  render () {
    return (
      <form className="modal-form-container" onSubmit={this.handleSubmit}>
        <label>Investment Amount</label>
        <input ref={thisDiv => this.input = thisDiv} className='form-text-input' type="text" onChange={this.handleChange}/>
        <input className='form-text-submit' type="submit" value="Invest Now" />
      </form>
    )
  }
}