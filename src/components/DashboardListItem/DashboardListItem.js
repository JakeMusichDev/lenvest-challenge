import React, { Component } from 'react'
import './DashboardListItem.css'

export default class DashboardListItem extends Component {
  render () {
    const { id, title, tranche, available, annualised_return, term_remaining, ltv, amount } = this.props.loanItem
    return (
      <div className='list-item-container' key={id}>
        <div className='list-item-title'>
          {title}
        </div>
        <div className='list-item-status'>
          Status
        </div>
        <div className="list-item-btn-container">
          <button>Invest</button>
        </div>
      </div>
    )
  }
}

// const ItemDetail = props  => {
//   return (
//     // <div className={`${}`}>
//     //   {props.item}
//     // </div>
//   )
// }