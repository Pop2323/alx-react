import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component Tests', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should render 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        const courseListRows = wrapper.find(CourseListRow);
        expect(courseListRows).toHaveLength(5);
    });
});
