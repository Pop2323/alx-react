import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Action Creator Tests', () => {
  describe('selectCourse', () => {
    it('should create an action to select a course', () => {
      const expectedAction = { type: SELECT_COURSE, index: 1 };
      expect(selectCourse(1)).toEqual(expectedAction);
    });
  });

  describe('unSelectCourse', () => {
    it('should create an action to unselect a course', () => {
      const expectedAction = { type: UNSELECT_COURSE, index: 1 };
      expect(unSelectCourse(1)).toEqual(expectedAction);
    });
  });
});
