import React from 'react'
import {shallow} from 'enzyme'
import ModalForm from './ModalForm'

describe('ModalForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ModalForm />);
  });

  it('renders form', () => {
    expect(wrapper.find("form").length).toEqual(1)
  })

  it('renders two form input', () => {
    expect(wrapper.find('input').length).toEqual(2)
  })
})