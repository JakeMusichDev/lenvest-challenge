import React from 'react'
import {shallow} from 'enzyme'
import Dashboard from './Dashboard'

describe('Loan Container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('renders main div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('renders header', () => {
    expect(wrapper.find('h1').length).toEqual(1)
  })

})