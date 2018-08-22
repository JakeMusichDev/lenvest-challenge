import React from 'react'
import {shallow} from 'enzyme'
import DashboardListItem from './DashboardListItem'

describe('DashboardListItem', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<DashboardListItem loanItem={{}} />);
  });

  it('renders title', () => {
    wrapper.setProps({loanItem: {title:'title'}});
    expect(wrapper.find('.list-item-title').text()).toEqual('title');
  })
  it('renders button', () => {
    expect(wrapper.find('.list-item-btn-container').length).toEqual(1)
  })
})