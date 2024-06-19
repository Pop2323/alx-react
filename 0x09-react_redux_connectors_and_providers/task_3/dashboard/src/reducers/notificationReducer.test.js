import notificationReducer from './notificationReducer';
import {
  markAsRead,
  setNotificationFilter,
  fetchNotificationsSuccess,
} from '../actions/notificationActionCreators';
import { Map, fromJS } from 'immutable';

describe('notificationReducer', () => {
  const initialState = Map({
    notifications: Map(),
    filter: 'DEFAULT',
  });

  it('Verifies default state returned', () => {
    const myState = notificationReducer(undefined, {});
    expect(myState.toJS()).toEqual({
      notifications: {},
      filter: 'DEFAULT',
    });
  });

  it('should return the initial state when no action is passed', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should mark the correct notification as read', () => {
    const state = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      },
    });

    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      },
    });

    expect(notificationReducer(state, markAsRead(2))).toEqual(expectedState);
  });

  it('should change the filter correctly', () => {
    const state = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      },
    });

    const expectedState = state.set('filter', 'URGENT');

    expect(notificationReducer(state, setNotificationFilter('URGENT'))).toEqual(expectedState);
  });

  it('should handle fetching notifications successfully', () => {
    const fetchedData = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ];

    const expectedState = initialState.set('notifications', fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    }));

    expect(notificationReducer(initialState, fetchNotificationsSuccess(fetchedData)).toJS()).toEqual(expectedState.toJS());
  });
});