import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/uiActionTypes';

import { Map } from 'immutable';

export const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null,
});

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);

        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);

        case LOGIN_SUCCESS:
            return state
                .set('isUserLoggedIn', true)
                .set('user', action.payload.user);

        case LOGIN_FAILURE:
            return state
                .set('isUserLoggedIn', false)
                .set('user', null);

        case LOGOUT:
            return state
                .set('isUserLoggedIn', false)
                .set('user', null);

        default:
            return state;
    }
}
