import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  } from './uiActionCreator';
  import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from './uiActionTypes';
  
  describe('UI Action Creators', () => {
    describe('login', () => {
      it('should create an action to login', () => {
        const email = 'test@example.com';
        const password = '123456';
        const expectedAction = {
          type: LOGIN,
          email,
          password,
        };
        expect(login(email, password)).toEqual(expectedAction);
      });
    });
  
    describe('logout', () => {
      it('should create an action to logout', () => {
        const expectedAction = { type: LOGOUT };
        expect(logout()).toEqual(expectedAction);
      });
    });
  
    describe('displayNotificationDrawer', () => {
      it('should create an action to display the notification drawer', () => {
        const expectedAction = { type: DISPLAY_NOTIFICATION_DRAWER };
        expect(displayNotificationDrawer()).toEqual(expectedAction);
      });
    });
  
    describe('hideNotificationDrawer', () => {
      it('should create an action to hide the notification drawer', () => {
        const expectedAction = { type: HIDE_NOTIFICATION_DRAWER };
        expect(hideNotificationDrawer()).toEqual(expectedAction);
      });
    });
  });
  