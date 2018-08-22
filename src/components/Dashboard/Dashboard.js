import React, { Component } from 'react'
import './Dashboard.css'

import { loans } from '../../data/current-loans.json'
import DashboardList from '../DashboardList/DashboardList'
import Modal from '../Modal/Modal'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalActive:false,
      currItem: null,
      currTotal: 0
    }

    this.loans = loans
  }

  componentWillMount() {
    let currTotal = 0
    for (const loan of loans) currTotal += parseInt(loan.available.replace(/[^\w]/, ''), 10)
    this.setState({currTotal})
  }

  activateModal = nextItem => {
    this.setState({
      modalActive: true,
      currItem:nextItem
    })
  }

  closeModal = () => {
    this.setState({modalActive:false, currItem: null})
  }

  calcTotalLoans = () => {
    
  }
  
  render () {
    return (
      <div className='dashboard-container'>
        <h1>Current Loans</h1>
        <DashboardList 
          loanListData={this.loans} 
          activateModal={this.activateModal} 
        />
        {"Current Total Available: " + this.state.currTotal}
        <Modal
          isActive={this.state.modalActive} 
          currItem={this.state.currItem} 
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}