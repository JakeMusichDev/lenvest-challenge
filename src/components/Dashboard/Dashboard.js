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

    this.loans = loans;
  }

  // componentDidMount() {
  //   const totalAvailable = loans.reduce((acc, currValue) => {
  //     return acc + currValue.available
  //   }, 0);
  // }

  activateModal = nextItem => {
    this.setState({
      modalActive: true,
      currItem:nextItem 
    })
  }
  
  render () {
    return (
      <div className='dashboard-container'>
        <h1>Current Loans</h1>
        <DashboardList 
          loanListData={this.loans} 
          activateModal={this.activateModal} 
        />
        <Modal
          isActive={this.state.modalActive} 
          currItem={this.state.currItem} 
        />
      </div>
    )
  }
}