import React from 'react'
import {shallow} from 'enzyme'
import Dashboard from './Dashboard'
import DashboardList from '../DashboardList/DashboardList'

describe('Dashboard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('renders main div', () => {
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.hasClass('dashboard-container')).toEqual(true)
  })
  it('renders header', () => {
    expect(wrapper.find('h1').length).toEqual(1)
  })
  it('renders DashboardList component', () => {
    (expect(wrapper.containsMatchingElement(
      <DashboardList loanListData={wrapper.instance().loans} />
    )).toEqual(true))
  })
})