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

  test('pass a selected value to the onChange handler', () => {
    // const value = '2';
    // const onChange = jest.fn();
    // const wrapper = shallow(
    //     <ModalForm onChange={onChange} />
    // );

    // expect(wrapper).toMatchSnapshot();

    // wrapper.find('input').simulate('change', {
    //   target: { value },
    // });

    // expect(onChange).toBeCalledWith(value);
});
})