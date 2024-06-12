import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseACtionTypes';

describe('uiReducer', () => {
    const initialState = {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
    };
    it ('verifies that the default state returns the initial state', () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    })
    it ('verifies that the state is updated correctly', () => {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true,
            )
        });
    }
    it ('verifies that the state is updated correctly', () => {
        const state = uiReducer(undefined, { type: SELECT_COURSE });
        expect(state).toEqual(initialState);
    }
);