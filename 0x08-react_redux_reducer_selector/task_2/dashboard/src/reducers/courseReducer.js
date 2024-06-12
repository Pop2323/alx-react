import {
	FETCH_COURSE_SUCCESS,
	SELECT_COURSE,
	UNSELECT_COURSE,
} from '../actions/courseActionTypes';

const initialState = [];

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map((course) => ({
                id: course.id,
                name: course.name,
                info: course.info,
            }));
        case SELECT_COURSE:
            return state.map((course) => {
                if (course.id === action.index) {
                    return {
                        ...course,
                        selected: true,
                    };
                }
                return {
                    ...course,
                    selected: false,
                };
            });
        case UNSELECT_COURSE:
            return state.map((course) => ({
                ...course,
                selected: false,
            }));
        default:
            return state;
    }
}

