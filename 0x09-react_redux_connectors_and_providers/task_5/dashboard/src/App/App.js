import React from "react";
import { connect } from "react-redux";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import AppContext from "./AppContext";
import { loginRequest } from "../actions/actionCreators";

class App extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.hideNotificationDrawer();
    }
  }

  render() {
    const { isLoggedIn, displayNotificationDrawer, hideNotificationDrawer, isNotificationDrawerVisible, login } = this.props;
    return (
      <AppContext.Provider value={{ user: this.props.user, logOut: this.props.logOut }}>
        <div className={css(styles.container, styles.small)}>
          <Header />
          <Notifications
            displayDrawer={isNotificationDrawerVisible}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
          />
        </div>
        <hr className={css(styles.hr)} />
        {isLoggedIn ? (
          <BodySectionWithMarginBottom>
            <CourseList listCourses={this.listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom>
            <Login logIn={login} />
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

// Map Redux state to component props
const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  isNotificationDrawerVisible: state.get('isNotificationDrawerVisible'),
  user: state.get('user'),
});

// Map action creators to component props
const mapDispatchToProps = {
  displayNotificationDrawer: () => ({ type: 'DISPLAY_NOTIFICATION_DRAWER' }),
  hideNotificationDrawer: () => ({ type: 'HIDE_NOTIFICATION_DRAWER' }),
  login: loginRequest,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  isNotificationDrawerVisible: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  isNotificationDrawerVisible: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
