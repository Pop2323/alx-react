import notificationData from '../../../../notifications.json';

const user = new schema.Entity("users")
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
	author: user,
	context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
	return notificationData
		.filter((notification) => notification.author.id === userId)
		.map((notification) => notification.context);
}

export { normalized };