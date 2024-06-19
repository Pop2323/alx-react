import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

// Mock console.log
const originalConsoleLog = console.log;
beforeAll(() => {
  console.log = jest.fn();
});
afterAll(() => {
  console.log = originalConsoleLog;
});

describe('WithLogging', () => {
  it('logs mount and unmount for pure HTML', () => {
    const WrappedComponent = () => <div>HTML content</div>;
    const WrappedComponentWithLogging = WithLogging({ WrappedComponent });
    const wrapper = mount(<WrappedComponentWithLogging />);

    // Expect console.log to be called with mount message
    expect(console.log).toHaveBeenCalledWith('Component WrappedComponent is mounted');

    wrapper.unmount();

    // Expect console.log to be called with unmount message
    expect(console.log).toHaveBeenCalledWith('Component WrappedComponent is going to unmount');
  });

  it('logs mount and unmount for Login component', () => {
    const WrappedComponentWithLogging = WithLogging({ WrappedComponent: Login });
    const wrapper = mount(<WrappedComponentWithLogging />);

    // Expect console.log to be called with mount message for Login component
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();

    // Expect console.log to be called with unmount message for Login component
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
