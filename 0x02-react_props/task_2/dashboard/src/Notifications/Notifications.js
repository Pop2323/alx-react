import React from 'react'
import close_icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'

import './Notifications.css'

export default function Notification(props) {
	return (
		<div className='Notifications'>
			<p style={{ display: 'inline', marginRight: '80%' }}>
				Here is the list of notifications
			</p>
			<button
				aria-label='Close'
				onClick={console.log('Close button has been clicked')}
			>
				<img src={close_icon} alt="close" height="15px" width="15px"></img>
			</button>
			<ul>
				<NotificationItem type="default" value="New course available" />
				<NotificationItem type="urgent" value="New resume available" />
				<NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
			</ul>
		</div>
	);
};
