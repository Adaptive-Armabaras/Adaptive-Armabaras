// Module Imports
import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { fullWhite } from 'material-ui/styles/colors';
import Register from './Register.jsx'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// File Imports
import Timer from './Timer.jsx';
import LoginView from './Login.jsx';
import Duck from './Duck.jsx';
import Ddiv from '../hoc/ddiv/ddiv.js'

// New
import UserLogin from './UserLogin';


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton style={{color: 'white'}} labelStyle={{fontWeight: '800', fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif', textTransform: 'none'}} label="Login" />
    );
  }
}

class Logged extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  handleSignOut() {
    axios.get('/signout');
    this.props.clearUserIdFromState();
    localStorage.clear();
  }
  render() {
    return (    
      <IconMenu
        iconButtonElement={
          <IconButton> 
            <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <Link to="/" style={{ textDecoration: 'none' }}><MenuItem primaryText="Sign out" onClick={this.handleSignOut} ></MenuItem></Link>
      </IconMenu>
    )
  }
};

Logged.muiName = 'IconMenu';

class AppHeader extends React.Component {
  
  constructor(props) {
    super(props);
    this.checkSignedin = this.checkSignedin.bind(this);
  }

  checkSignedin() {
    console.log("Started!")
    this.props.logged ?
      <Logged clearUserIdFromState={this.props.clearUserIdFromState} />
      :
      <Link to="/login"> <Login /> </Link>
  }

  render() {
    return (
      <Ddiv>
        <div className="app-header">

          <div className="nav-center header header-el ml-3">
            <div className="header-text">
              <h2>  Hump Day  </h2> 
              
            </div>
          </div>
          
          <div className="nav-right header-el"> 
            {this.props.logged ? 
              <Logged clearUserIdFromState={this.props.clearUserIdFromState} /> 
              : 
              <Link to="/login"> Login </Link> 
            } 
          </div>
          <Route exact path="/signup" render={()=><Register setUserIdToState={this.props.setUserIdToState} isActive={true}/>}/>
          {/* <Route exact path="/login" render={()=><LoginView setUserIdToState={this.props.setUserIdToState} isActive={true}/>}/> */}
          <Route exact path="/login" component={UserLogin}/>

          <button type="button" className="btn btn-info tsk-btn">
            Add Task 
          </button>
          
          <Duck className='duck-view' />

          <button type="button" className="btn btn-info app-btn" onClick={this.checkSignedin}>
            Sign Out 
          </button>
          
        </div>
      </Ddiv>
    )
  }

}

export default AppHeader;


