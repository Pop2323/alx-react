import {
    markAsRead,
    setNotificationFilter,
    fetchNotificationsSuccess,
  } from '../actions/notificationActionCreators';
  import { notificationReducer } from './notificationReducer';
  
  describe('Notification Reducer Tests', () => {
    const initialState = {
      notifications: [],
      filter: 'DEFAULT',
    };
  
    it('should return the initial state when no action is passed', () => {
      expect(notificationReducer(undefined, {})).toEqual(initialState);
    });
  
    it('should mark the correct notification as read', () => {
      const state = {
        filter: 'DEFAULT',
        notifications: [
          { id: 1, isRead: false, type: 'default', value: 'New course available' },
          { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
          { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        ],
      };
  
      const expectedState = {
        filter: 'DEFAULT',
        notifications: [
          { id: 1, isRead: false, type: 'default', value: 'New course available' },
          { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
          { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        ],
      };
  
      expect(notificationReducer(state, markAsRead(2))).toEqual(expectedState);
    });
  
    it('should change the filter correctly', () => {
      const state = {
        filter: 'DEFAULT',
        notifications: [
          { id: 1, isRead: false, type: 'default', value: 'New course available' },
          { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
          { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        ],
      };
  
      const expectedState = {
        filter: 'URGENT',
        notifications: [
          { id: 1, isRead: false, type: 'default', value: 'New course available' },
          { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
          { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        ],
      };
  
      expect(notificationReducer(state, setNotificationFilter('URGENT'))).toEqual(expectedState);
    });
  
    it('should handle fetching notifications successfully', () => {
      const fetchedData = {
        filter: 'DEFAULT',
        notifications: [
          { id: 1, isRead: false, type: 'default', value: 'New course available' },
          { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
          { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        ],
      };
  
      expect(notificationReducer(initialState, fetchNotificationsSuccess(fetchedData.notifications))).toEqual(fetchedData);
    });
  });