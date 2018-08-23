import React from 'react'
import {shallow} from 'enzyme'
import TotalCounter from './TotalCounter'

describe('TotalCounter', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TotalCounter total={'100'} />);
  });

  it('renders a container div', () => {
    expect(wrapper.hasClass('total-counter-container')).toEqual(true)
  })

  it('renders total amount', () => {
    expect(wrapper.find('.counter-value').text()).toEqual('£100')
  })
})