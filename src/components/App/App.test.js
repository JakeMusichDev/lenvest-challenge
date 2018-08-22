import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import App from './App';
import Dashboard from '../Dashboard/Dashboard'

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    (expect(wrapper.find('div').length).toEqual(1))
  });

  it('renders Dashboard component', () => {
    (expect(wrapper.containsMatchingElement(<Dashboard />)).toEqual(true))
  })
});

