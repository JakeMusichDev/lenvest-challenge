import React, { Component } from 'react'

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
      <form onSubmit={this.handleSubmit}>
        <label>Investment Amount $</label>
        <input type="text" onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}