import React from 'react'
import {shallow} from 'enzyme'
import ModalItemDetail from './ModalItemDetail'

describe('ModalItemDetail', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ModalItemDetail />);
  });
  it('renders main div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})