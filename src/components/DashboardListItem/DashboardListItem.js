import React, { Component } from 'react'
import './DashboardListItem.css'

export default class DashboardListItem extends Component {
  setNextModalItem = () => {
    const {activateModal, loanItem} = this.props
    activateModal(loanItem)
  }

  render () {
    const { id, title, tranche, available, annualised_return, ltv, amount, term_remaining, investedStatus } = this.props.loanItem
    return (
      <div className='list-item-container' key={id} style={{'backgroundColor': investedStatus ? "rgba(155, 228, 165, 0.63)" : 'rgba(227, 250, 255, 0.705)'}}>
        <div className="list-item-title">{title}</div>
        <div className="list-item-detail-container">
          <div className="list-item-entry"> Tranche <div className="list-item-entry-detail"> {tranche} </div></div>
          <div className="list-item-entry"> Available <div className="list-item-entry-detail"> £{available.toLocaleString('en-US')}</div></div>
          <div className="list-item-entry"> Annualised Return <div className="list-item-entry-detail"> {(annualised_return).toLocaleString()} </div></div>
          <div className="list-item-entry"> LTV <div className="list-item-entry-detail"> {ltv} </div></div>
          <div className="list-item-entry"> Amount Remaining <div className="list-item-entry-detail"> £{(amount).toLocaleString()} </div></div>
          <div className="list-item-entry"> Term Remaining <div className="list-item-entry-detail"> {term_remaining} </div></div>
        </div>
        <div className='list-item-status'>{investedStatus ? "Invested ✔" : ''}</div>
        <div className="list-item-btn-container">
          <button className="list-item-btn" disabled={investedStatus} onClick={this.setNextModalItem}>{investedStatus ? 'Investment Complete' : 'Invest'}</button>
        </div>
      </div>
    )
  }
}