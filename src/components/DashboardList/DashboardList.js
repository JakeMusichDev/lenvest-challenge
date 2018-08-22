import React, { Component } from 'react'
import DashboardListItem from '../DashboardListItem/DashboardListItem'

export default class DashboardList extends Component {
  render () {
    console.log(this.props.loanListData);
    
    return (
      <div>
        {this.props.loanListData.map( loanItem => <DashboardListItem loanItem={loanItem} /> )}
      </div>
    )
  }
}