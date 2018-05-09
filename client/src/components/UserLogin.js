import React, { Component } from 'react';
import axios from 'axios';
class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive || false
    };
    this.style = {
      display: this.state.isActive ? 'flex' : 'none'
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ isActive: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        this.props.setUserIdToState(response.data.userId);
        localStorage.setItem('userId', response.data.userId);

        window.location = '/';
      });
    this.setState({ email: '', password: '', isActive: false });
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
                    <h4 className="card-title">HumpDay Login</h4>
                    <form action="/login" method="post">
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
                          Don't have an account?{' '}
                          <a href="/signup">Create One</a>
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

export default UserLogin;
