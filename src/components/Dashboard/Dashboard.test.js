import React from 'react'
import {shallow} from 'enzyme'
import Dashboard from './Dashboard'
import DashboardList from '../DashboardList/DashboardList'
import Modal from '../Modal/Modal'

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
      <DashboardList 
        loanListData={wrapper.instance().loans} 
        activateModal={wrapper.instance().activateModal}
      />
    )).toEqual(true))
  })
  it('renders Modal component', () => {
    (expect(wrapper.containsMatchingElement(
      <Modal
        isActive={wrapper.instance().state.modalActive} 
        currItem={wrapper.instance().state.currItem}
      />
    )).toEqual(true))
  })
})