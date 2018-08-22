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
  it('renders status', () => {
    expect(wrapper.find('.list-item-status').length).toEqual(1)
  })
  it('renders loan item details', () => {
    wrapper.setProps({loanItem: {entry:'entry'}});
    expect(wrapper.find('.list-item-entry').length).toEqual(1)
  })
})