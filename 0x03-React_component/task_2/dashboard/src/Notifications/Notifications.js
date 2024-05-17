import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.listNotifications.length > this.props.listNotifications.length;
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		const { displayDrawer, listNotifications } = this.props;
		return (
			<React.Fragment>
				{displayDrawer ? (
					<div className='flex-area'>
						<div className='menuItem'>
							<p>Your notifications</p>
						</div>
						<div className='Notifications'>
							<ul>
								{listNotifications && listNotifications.length > 0 ? (
									listNotifications.map(({ id, html, type, value }) => (
										<NotificationItem
											key={id}
											type={type}
											value={value}
											html={html}
											markAsRead={this.markAsRead} // Pass markAsRead function
											id={id} // Pass id to NotificationItem
										/>
									))
								) : (
									<div className='notification-header'>
										<NotificationItem value='No new notification for now' />
										<button
											aria-label='Close'
											onClick={() => console.log('Close button has been clicked')}
										>
											<img
												style={{ display: 'inline' }}
												src={closeIcon}
												alt='Close'
											/>
										</button>
									</div>
								)}
							</ul>
						</div>
					</div>
				) : (
					<div className='menuItem'>
						<p>Your notifications</p>
					</div>
				)}
			</React.Fragment>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

export default Notifications;

