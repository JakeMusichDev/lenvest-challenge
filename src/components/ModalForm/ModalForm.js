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
    this.props.setFormValue(this.state.inputValue)
    e.preventDefault()
  }

  render () {
    return (
      <form className="modal-form-container" onSubmit={this.handleSubmit}>
        <label>Investment Amount $</label>
        <input className='form-text-input' type="text" onChange={this.handleChange}/>
        <input className='form-text-input' type="submit" value="Invest now" />
      </form>
    )
  }
}