import React, { Component } from 'react'

export default class DashboardListItem extends Component {
  render () {
    const { id, title } = this.props.loanItem
    return (
      <div key={id}>
        {title}
      </div>
    )
  }
}