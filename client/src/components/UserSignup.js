import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class UserSignUp extends Component {
  render() {
    return (
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="brand">
                  <img src="img/logo.jpg" />
                </div>
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">HumpDay Login</h4>
                    <form method="POST">
                      <div className="form-group">
                        <label for="email">E-Mail Address</label>

                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          value=""
                          required
                          autofocus
                        />
                      </div>

                      <div className="form-group">
                        <label for="password">
                          Password
                          <a href="forgot.html" className="float-right">
                            Forgot Password?
                          </a>
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          required
                          data-eye
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          <input type="checkbox" name="remember" /> Remember Me
                        </label>
                      </div>

                      <div className="form-group no-margin">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Login
                        </button>
                      </div>
                      <div className="margin-top20 text-center">
                        Don't have an account?{' '}
                        <a href="register.html">Create One</a>
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
