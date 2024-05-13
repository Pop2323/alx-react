import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it('should render a div with the class App-header', () => {
  	const component = shallow(<App />);

  	expect(component.find('.App-header')).toBeDefined();
  });
  it('should render a div with the class App-body', () => {
  	const component = shallow(<App />);

  	expect(component.find('.App-body')).toBeDefined();
  });
  it('should render a div with the class App-footer', () => {
  	const component = shallow(<App />);

  	expect(component.find('.App-footer')).toBeDefined();
  });
});

describe('When App isLoggedIn is set to true', function () {
  it('should not render the Login component', function () {
      const wrapper = shallow(<App isLoggedIn={true} />);
      const loginComponent = wrapper.find(Login);
      expect(loginComponent).toHaveLength(0);
  });

  it('should render the CourseList component', function () {
      const wrapper = shallow(<App isLoggedIn={true} />);
      const courseListComponent = wrapper.find(CourseList);
      expect(courseListComponent).toHaveLength(1);
  });
});