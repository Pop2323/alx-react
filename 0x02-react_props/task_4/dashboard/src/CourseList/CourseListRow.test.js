import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('CourseListRow Component Tests', () => {
    it('Renders a single cell with colspan=2 when textSecondCell is not provided and isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test Header" />);
        expect(wrapper.html()).toBe('<tr><th colSpan="2">Test Header</th></tr>');
    });

    it('Renders two cells when both textFirstCell and textSecondCell are provided and isHeader is true', () => {
        const wrapper = shallow(
            <CourseListRow isHeader={true} textFirstCell="First Header" textSecondCell="Second Header" />
        );
        expect(wrapper.html()).toBe('<tr><th>First Header</th><th>Second Header</th></tr>');
    });

    it('Renders two td elements within a tr element when isHeader is false and both textFirstCell and textSecondCell are provided', () => {
        const wrapper = shallow(
            <CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />
        );
        expect(wrapper.html()).toBe('<tr><td>First Cell</td><td>Second Cell</td></tr>');
    });
});
