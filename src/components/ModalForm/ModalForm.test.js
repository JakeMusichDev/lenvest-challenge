import React from 'react'
import {shallow} from 'enzyme'
import ModalForm from './ModalForm'

describe('ModalForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ModalForm />);
  });
  it('renders main div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})