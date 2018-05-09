import React, { Component } from 'react';
import ReactDom from 'react-dom';
import UserLogin from './UserLogin';
import Dashboard from './App.jsx';
import { MuiThemeProvider, getMuiTheme } from 'material-ui';
import {
  BrowserRouter,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import UserSignUp from './UserSignup';

class HumpdayDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      currentWeekData: [],
      weekState: [
        { date: 'Monday', count: 0 },
        { date: 'Tuesday', count: 0 },
        { date: 'Wednesday', count: 0 },
        { date: 'Thursday', count: 0 },
        { date: 'Friday', count: 0 },
        { date: 'Saturday', count: 0 },
        { date: 'Sunday', count: 0 }
      ],
      addTaskActive: false
    };
  }

  componentDidMount() {
    this.setState({ userId: localStorage.getItem('userId') });
  }

  setUserIdToState = userId => {
    this.setState({ userId: userId });
  };

  clearUserIdFromState = () => {
    this.setState({ userId: null });
  };

  toggleAddTaskForm = () =>
    this.setState({ addTaskActive: !this.state.addTaskActive });

  updateCurrentWeekData = data => {
    this.setState({ currentWeekData: data });
  };

  // detect login

  loggedIn() {
    if (localStorage.userId) {
      return true;
    }
    return false;
  }

  requireAuth(nextState, replace) {
    if (!this.loggedIn()) {
      return true;
    }
    return false;
  }

  //

  render(props) {
    return (
      <BrowserRouter>
        <Switch>
          <MuiThemeProvider>
            <Route
              exact
              path="/"
              render={() =>
                this.requireAuth() ? <Redirect to="/login" /> : <Dashboard />
              }
            />
            <Route
              exact
              path="/login"
              render={props => (
                <UserLogin
                  logged={!!this.state.userId}
                  setUserIdToState={this.setUserIdToState}
                  clearUserIdFromState={this.clearUserIdFromState}
                />
              )}
            />
            {/* <Route exact path="/signup" component={UserSignUp} /> */}

            <Route
              exact
              path="/signup"
              render={props => (
                <UserSignUp
                  logged={!!this.state.userId}
                  setUserIdToState={this.setUserIdToState}
                  clearUserIdFromState={this.clearUserIdFromState}
                />
              )}
            />
          </MuiThemeProvider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default HumpdayDashboard;
