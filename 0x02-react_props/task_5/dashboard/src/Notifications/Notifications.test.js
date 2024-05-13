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

    it('Checks that Notifications renders correctly with an empty array or without listNotifications prop', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul').children()).toHaveLength(0);
    });

    it('Checks that Notifications renders listNotifications correctly with the right number of NotificationItem', () => {
        const listNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: {__html: getLatestNotification()}},
        ];
        const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
    });

    it('Checks that message is not displayed when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.html()).not.toContain('Here is the list of notifications');
        expect(wrapper.html()).toContain('No new notification for now');
    });
});
