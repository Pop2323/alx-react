import {shallow} from 'enzyme';
import React from 'react';
import Login from './Login';

describe('<Login />', () => {
    it('Tests that Login renders without crashing the content', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    })

    it('Contains the text "Login"', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.text()).toContain('Login');
    })
}