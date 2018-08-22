import React, { Component } from 'react'
import './DashboardListItem.css'

export default class DashboardListItem extends Component {
  setNextModalItem = () => {
    const {activateModal, loanItem} = this.props
    activateModal(loanItem)
  }

  buildItemDetailSection = () => {
    return Object.entries(this.props.loanItem)
      .filter(entry => entry[0] !== 'id' && entry[0] !== 'investedStatus' && entry[0] !== 'title')
      .map( (entry) => {
        return <div className="list-item-entry">{entry[0] + ': '+ entry[1]}</div>
      })
  }

  render () {
    const { id, title, investedStatus } = this.props.loanItem
    return (
      <div className='list-item-container' key={id} style={{'backgroundColor': investedStatus ? "rgba(155, 228, 165, 0.63)" : 'rgba(227, 250, 255, 0.705)'}}>
        <div className="list-item-detail-container">
          <div className="list-item-title">{title}</div>
          {this.buildItemDetailSection()}
        </div>
        <div className='list-item-status'>{investedStatus ? "Invested ✔" : ''}</div>
        <div className="list-item-btn-container">
          <button className="list-item-btn" onClick={this.setNextModalItem}>Invest</button>
        </div>
      </div>
    )
  }
}