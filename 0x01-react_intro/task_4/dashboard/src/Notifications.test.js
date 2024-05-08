import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe('Notifications', () => {
  it('renders without crashing', () => {
    const notification = shallow(<Notifications />);
    expect(notification).toBeDefined();
    });
    it('render ul', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('ul')).toBeDefined();
    });
    it('render three list items', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('li')).toHaveLength(3);
    });
    it('render correct text', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find("p").text()).toBe("Here is the list of notifications");
    });
});