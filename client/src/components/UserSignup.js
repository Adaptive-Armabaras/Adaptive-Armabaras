import React, { Component } from 'react';
import axios from 'axios';

class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true
    };
    this.style = {
      display: this.state.isActive ? 'flex' : 'none'
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('/signup', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        this.props.setUserIdToState(response.data.userId);
        localStorage.setItem('userId', response.data.userId);
        this.setState({ email: '', password: '', isActive: false });
        window.location = '/';
      });
    // this.setState({ email: '', password: '', isActive: false });
  }

  handleClose() {
    this.setState({ isActive: false });
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="brand" />
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      HumpDay User Signup
                    </h4>
                    <form action="/signup" method="post">
                      <div className="form-group">
                        <label htmlFor="email">E-Mail Address</label>

                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={this.handleEmailChange}
                          value={this.state.email}
                          required
                          autoFocus
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          onChange={this.handlePasswordChange}
                          value={this.state.password}
                          required
                          data-eye
                        />
                      </div>

                      <div className="form-group no-margin">
                        <button
                          type="button"
                          className="btn btn-primary btn-block"
                          onClick={this.handleSubmit}
                        >
                          Login
                        </button>
                      </div>
                      <div className="margin-top20 text-center">
                        <p>
                          Already have an account?<br />
                          <a href="/login">Login</a> Or view{' '}
                          <a href="/">dashboard</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="footer" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default UserSignUp;
