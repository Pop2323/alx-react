import { shallow, mount } from "enzyme";
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

describe("App tests", () => {
  it("renders without crashing App", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it("render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });

  it("render Header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it("render Login Component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });

  it("render Footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);
    component.setProps({ isLoggedIn: false });
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("calls logOut function and displays alert when Ctrl+h is pressed", () => {
    const logOutMock = jest.fn();
    window.alert = jest.fn();
    const component = shallow(<App isLoggedIn={true} logOut={logOutMock} />);
    component.instance().handleKeyPress({ key: "h", ctrlKey: true });
    expect(logOutMock).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });
});

describe("testing state of App.js", () => {
  it("displayDrawer initial value should be set to false", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it("should set displayDrawer to true after calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it("should set displayDrawer to false after calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it("logIn function updates the state correctly", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn("user@test.com", "password");
    expect(wrapper.state().user).toEqual({ email: "user@test.com", password: "password", isLoggedIn: true });
  });

  it("logOut function updates the state correctly", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn("user@test.com", "password"); // Log in first
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual({ email: "", password: "", isLoggedIn: false });
  });

  it("markNotificationAsRead function updates the state correctly", () => {
    const wrapper = shallow(<App />);
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: '<p>New notification</p>' },
    ];
    wrapper.setState({ listNotifications: initialNotifications });
    expect(wrapper.state().listNotifications.length).toBe(3);

    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 3, type: 'default', html: '<p>New notification</p>' },
    ]);
  });
});
