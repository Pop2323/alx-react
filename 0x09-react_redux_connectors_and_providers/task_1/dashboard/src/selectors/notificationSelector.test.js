import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map, fromJS } from 'immutable';

describe('Notification Selectors', () => {
  const state = Map({
    filter: 'DEFAULT',
    notifications: fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    }),
  });

  it('filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications returns the list of notifications in Map format', () => {
    const expectedNotifications = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });

    expect(getNotifications(state)).toEqual(expectedNotifications);
  });

  it('getUnreadNotifications returns the list of unread notifications in Map format', () => {
    const expectedUnreadNotifications = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });

    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});

