import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('tests that Notifications renders without crashing content', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Checks that the component renders <NotificationItem /> elements', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists(NotificationItem)).toBe(true);
    });

    it('Checks the 1st Item renders correct html', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.html()).toContain('New course available');
    });

    it('Checks that the menu item is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div.menuItem')).toHaveLength(1);
    });

    it('Checks that the div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div.Notifications')).toHaveLength(0);
    });

    it('Checks that the menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.menuItem')).toHaveLength(1);
    });

    it('Checks that the div.Notifications is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications')).toHaveLength(1);
    });
});
