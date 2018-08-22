import React, { Component } from 'react'
import './ModalForm.css'

export default class ModalForm extends Component {
  constructor(props) {
    super(props)

    this.state = {inputValue: ""}
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  handleSubmit = e => {
    if(this.state.inputValue < this.props.threshold) {
      return 
    }
    this.props.setFormValue(this.state.inputValue)
    this.input.value = ''
    e.preventDefault()
  }

  render () {
    return (
      <form className="modal-form-container" onSubmit={this.handleSubmit}>
        <label>Investment Amount $</label>
        <input ref={thisDiv => this.input = thisDiv} className='form-text-input' type="text" onChange={this.handleChange}/>
        <input className='form-text-submit' type="submit" value="Invest now" />
      </form>
    )
  }
}