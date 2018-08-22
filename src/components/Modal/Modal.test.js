import React from 'react'
import {shallow} from 'enzyme'
import Modal from './Modal'
import ModalItemDetail from '../ModalItemDetail/ModalItemDetail'

describe('Modal', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Modal />);
  });
  it('renders main div', () => {
    expect(wrapper.find('div').length).toEqual(3)
    expect(wrapper.hasClass('modal-outer-container')).toEqual(true)
  })
  it('renders DashboardList component', () => {
    (expect(wrapper.containsMatchingElement(<ModalItemDetail />)).toEqual(true))
  })
})