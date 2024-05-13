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

    it('should render correctly with an empty array or without listCourses prop', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(0);
    });

    it('should render listCourses correctly when passed as props', () => {
        const listCourses = [
            { id: 1, name: "ES6", credit: 60 },
            { id: 2, name: "Webpack", credit: 20 },
            { id: 3, name: "React", credit: 40 },
        ];
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length);
    });
});
