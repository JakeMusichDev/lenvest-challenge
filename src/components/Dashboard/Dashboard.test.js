import React from 'react'
import {shallow} from 'enzyme'
import Dashboard from './Dashboard'

describe('Loan Container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('renders div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

})