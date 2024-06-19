import React, { Component } from "react";
import { connect } from "react-redux";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { user, logOut } from "./AppContext";
import AppContext from "./AppContext";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: defaultUser,
			listNotifications: [
				{ id: 1, type: 'default', value: 'New course available' },
				{ id: 2, type: 'urgent', value: 'New resume available' },
				{ id: 3, type: 'default', html: getLatestNotification() },
			],
			logOut: () => {
				this.setState({ user: defaultUser });
			},
		};

		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.logIn = this.logIn.bind(this);
		this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				this.state.logOut();
			}
		});
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				this.state.logOut();
			}
		});
	}

	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

	logIn(email, password) {
		this.setState({
			user: {
				email: email,
				password: password,
				isLoggedIn: true,
			},
		});
	}

	markNotificationAsRead(id) {
		this.setState((prevState) => ({
			listNotifications: prevState.listNotifications.filter(notification => notification.id !== id),
		}));
	}

	render() {
		const { user, logOut, listNotifications } = this.state;
		const { displayDrawer } = this.props;
		return (
			<AppContext.Provider value={{ user, logOut }}>
				<div className={css(styles.container, styles.small)}>
					<Header />
					<Notifications
						listNotifications={listNotifications}
						displayDrawer={displayDrawer}
						handleDisplayDrawer={this.handleDisplayDrawer}
						handleHideDrawer={this.handleHideDrawer}
						markNotificationAsRead={this.markNotificationAsRead}
					/>
				</div>
				<hr className={css(styles.hr)} />
				{this.state.user.isLoggedIn ? (
					<BodySectionWithMarginBottom>
						<CourseList listCourses={this.listCourses} />
					</BodySectionWithMarginBottom>
				) : (
					<BodySectionWithMarginBottom>
						<Login logIn={this.logIn} />
					</BodySectionWithMarginBottom>
				)}
				<BodySection title='News from the School'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
					</p>
				</BodySection>
				<hr className={css(styles.hr)} />
				<Footer />
			</AppContext.Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	hr: {
		borderTop: '2px solid red',
	},
	small: {
		'@media (max-width: 900px)': {
			display: 'grid',
			justifyContent: 'center',
		},
	},
});

export const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.get('isUserLoggedIn'),
		displayDrawer: state.get('isNotificationDrawerVisible'),
	};
}

export default connect(mapStateToProps)(App);