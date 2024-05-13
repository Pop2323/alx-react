import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('<Notifications />', () => {
	it('tests that Notifications renders without crashing content', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Checks that the component renders <NotificationItem /> elements', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists('NotificationItem')).toBe(true);
	})

	it('Checks the 1st Item renders correct html', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.html()).toContain('New course available');
	})
});
