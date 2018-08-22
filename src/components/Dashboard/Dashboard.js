import React, { Component } from 'react'
import './Dashboard.css'

import { loans } from '../../data/current-loans.json'
import DashboardList from '../DashboardList/DashboardList'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalActive:false,
      currLoanItem: null,
      currTotal: 0
    }

    this.loans = loans;
  }

  // componentDidMount() {
  //   const totalAvailable = loans.reduce((acc, currValue) => {
  //     return acc + currValue.available
  //   }, 0);
  // }

  render () {
    return (
      <div className='dashboard-container'>
        <h1>Current Loans</h1>
        <DashboardList loanListData={this.loans} />
      </div>
    )
  }
}