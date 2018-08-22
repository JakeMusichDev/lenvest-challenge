import React from 'react'
import {shallow} from 'enzyme'
import DashboardList from './DashboardList'
import DashboardListItem from '../DashboardListItem/DashboardListItem'

describe('DashboardList', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<DashboardList loanListData={[]} />);
  });

  it('renders array of loanItems from props', () => {
    wrapper.setProps({loanListData: [1,2,3] });
    expect(wrapper.children().length).toEqual(3);
  })
  
  it('contains List Item component', () => {
    wrapper.setProps({loanListData: [1] });
    (expect(wrapper.containsMatchingElement(<DashboardListItem  />)).toEqual(true))
  })
})