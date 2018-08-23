import React from 'react'
import {shallow} from 'enzyme'
import ModalItemDetail from './ModalItemDetail'

describe('ModalItemDetail', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ModalItemDetail currItem={{}} />);
  });

  it('renders a container div', () => {
    expect(wrapper.hasClass('modal-item-detail-container')).toEqual(true)
  })

  it('renders loan title', () => {
    wrapper.setProps({currItem: {title:'title'}});
    expect(wrapper.find('.modal-item-detail-title').text()).toEqual(' title ')
  })

  it('renders entries', () => {
    expect(wrapper.find('.modal-item-detail-entry').length).toEqual(2)
  })
})