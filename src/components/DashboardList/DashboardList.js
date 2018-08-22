import React, { Component } from 'react'
import DashboardListItem from '../DashboardListItem/DashboardListItem'

export default class DashboardList extends Component {
  render () {
    return (
      <div className="dashboard-list-container" >
        {this.props.loanListData.map( loanItem => <DashboardListItem loanItem={loanItem} /> )}
      </div>
    )
  }
}