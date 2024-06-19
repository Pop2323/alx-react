import notificationData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define schema entities
const user = new schema.Entity("users");
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the data
const normalized = normalize(notificationData, [notification]);

// Function to get all notifications by user ID
export default function getAllNotificationsByUser(userId) {
  const res = [];
  const { notifications, messages } = normalized.entities;

  // Loop through the notifications and collect messages for the specified userId
  for (const id in notifications) {
    if (notifications[id].author === userId) {
      res.push(messages[notifications[id].context]);
    }
  }

  return res;
}

export function notificationsNormalizer(data) {
	return normalize(data, [notification]);
}

export { normalized };
