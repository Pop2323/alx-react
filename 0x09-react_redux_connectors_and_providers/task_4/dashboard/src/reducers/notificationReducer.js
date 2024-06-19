import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
    FETCH_NOTIFICATIONS_SUCCESS
  } from '../actions/notificationActionTypes';
  import { Map, fromJS } from 'immutable';
  import { notificationsNormalizer } from '../schema/notifications';
  
  const initialState = Map({
    notifications: Map(),
    filter: NotificationTypeFilters.DEFAULT,
  });
  
  export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
        const normalizedData = notificationsNormalizer(action.data);
        return state.merge({
          notifications: fromJS(normalizedData.entities.notifications),
        });
  
      case MARK_AS_READ:
        return state.setIn(['notifications', String(action.index), 'isRead'], true);
  
      case SET_TYPE_FILTER:
        return state.set('filter', action.filter);
  
      default:
        return state;
    }
  }
  