import React, { Component } from 'react'
import './Dashboard.css'

import currentLoans from '../../data/current-loans.json'
import DashboardList from '../DashboardList/DashboardList'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentWillMount() {
    
  }

  render () {
    return (
      <div className='dashboard-container'>
        <h1>Current Loans</h1>
        <DashboardList loanListData={currentLoans.loans} />
      </div>
    )
  }
}

export default Dashboard