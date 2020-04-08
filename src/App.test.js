import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './stateless/layout';
import BurgerBuilder from './stateful/burgerBuilder';

const COMPONENT_UNDER_TEST = '<App />';

describe(COMPONENT_UNDER_TEST, () => {

  it('App has Layout component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it('App has BurgerBuilder component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BurgerBuilder)).toHaveLength(1);
  });

});