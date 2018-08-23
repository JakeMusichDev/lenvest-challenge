import React, { Component } from 'react'
import DashboardListItem from '../DashboardListItem/DashboardListItem'
import './DashboardList.css'

export default class DashboardList extends Component {
  render () {
    return (
      <div className="dashboard-list-container" >
        {this.props.loanListData.map( loanItem => <DashboardListItem loanItem={loanItem} key={`${loanItem.id}`} activateModal={this.props.activateModal} /> )}
      </div>
    )
  }
}