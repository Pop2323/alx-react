import { shallow, mount } from "enzyme";
import React from "react";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user } from '../App/AppContext';

describe("<Header />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify that the components render img", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div img")).toHaveLength(1);
  });

  it("Verify that the components render h1", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div h1")).toHaveLength(1);
  });

  // New tests
  it("logoutSection is not created with default context value", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: user }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toEqual(false);
  });

  it("logoutSection is created when user is logged in", () => {
    const loggedInUser = { email: "user@test.com", isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user: loggedInUser }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toEqual(true);
  });

  it("Clicking on the logout link calls the spy", () => {
    const logOutSpy = jest.fn();
    const loggedInUser = { email: "user@test.com", isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user: loggedInUser, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find("#logoutSection a").simulate("click");
    expect(logOutSpy).toHaveBeenCalled();
  });
});