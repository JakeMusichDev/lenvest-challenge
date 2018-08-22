import React, { Component } from 'react'
import './Dashboard.css'

import { loans } from '../../data/current-loans.json'
import DashboardList from '../DashboardList/DashboardList'
import Modal from '../Modal/Modal'
import TotalCounter from '../TotalCounter/TotalCounter'

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
    for (const loan of loans) {
      loan['investedStatus'] = false 
      currTotal += this.cleanParseStr(loan.available)
    }
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

  getFormValue = value => {
    const {currTotal, currItem } = this.state
    const cleanNumValue = this.cleanParseStr(value)
    const nextCurrTotal = currTotal - cleanNumValue
    this.loans = this.setLoanItemChange(cleanNumValue, currItem.id)
    this.setState({currTotal:nextCurrTotal}, this.closeModal)
  }

  setLoanItemChange = (val, itemId) => {
    return this.loans.map( loan => {
      if(loan.id === itemId ) {
        loan['investedStatus'] = true
        loan['available'] = (this.cleanParseStr(loan.available) - val).toLocaleString('en-UK')
      }
      return loan 
    })
  }

  cleanParseStr = string => {
    return parseInt(string.replace(/[^\w]/, ''), 10)
  }
  
  render () {
    return (
      <div className='dashboard-container'>
        <div className='dashboard-header'>Current Loans</div>
        <DashboardList 
          loanListData={this.loans} 
          activateModal={this.activateModal} 
        />
        <TotalCounter total={this.state.currTotal}/>
        <Modal
          isActive={this.state.modalActive} 
          currItem={this.state.currItem} 
          closeModal={this.closeModal}
          setFormValue={this.getFormValue.bind(this)}
        />
      </div>
    )
  }
}