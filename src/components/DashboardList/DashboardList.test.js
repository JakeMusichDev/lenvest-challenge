import React from 'react'
import {shallow} from 'enzyme'
import DashboardList from './DashboardList'

describe('DashboardList', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<DashboardList />);
  });

  it('renders single div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })


})