import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  InputGroup,
  Form,
  Input,
  Button
} from 'reactstrap';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Login.scss';
import {
  onLoginUser
} from '../../actions/authAction';
import loginPageIcon from '../../assets/loginPageIcon.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: '',
      password: ''
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    let { identifier, password } = this.state;

    identifier = identifier.trim();
    password = password.trim();

    this.props.onLoginUser(identifier, password);
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated, history } = nextProps;
    if (isAuthenticated)
      // TODO: clear state for identifier, password
      this.setState({ 
        identifier: '',
        password: ''
       });
      history.push('/admin/dashboard');
  }

  render() {
    return (
      <div className="Auth">
        <div className="wrap-login">
          <div className="left-side login-pic">
            <img src={loginPageIcon} alt="loginPageIcon" />
          </div>

          <Form className="right-side login-form validate-form">
            <span className="login-form-title">
              Admin Login
            </span>
            <InputGroup className="wrap-input validate-input">
                <Input placeholder="email/username" name="identifier" value={this.state.identifier} type="text" className="input" onChange={this.handleInputChange} pattern="(?=^.{2,}$)(?!.*\s).*$" title="more than 2 characters required" required />
                <span className="focus-input"></span>
                <span className="symbol-input">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
            </InputGroup>
            <InputGroup className="wrap-input validate-input">
              <Input placeholder="password" name="password" value={this.state.password} type="password" className="input" onChange={this.handleInputChange} pattern="(?=^.{6,12}$)(?!.*\s).*$" title="6 to 12 characters required" required />
              <span className="focus-input"></span>
              <span className="symbol-input">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </InputGroup>
            <div className="container-login-form-btn">
              <Button className="login-form-btn" onClick={this.handleLogin} type="submit">Login</Button>
            </div>
            <div className="text-center p-t-12">
              <span className="txt1">
                Forgot &nbsp;
              </span>
              <Link className="txt2" to="/admin/forgot-password">
                Username or Email / Password?
              </Link>
            </div>

            <div className="text-center p-t-136">
              <Link className="txt2" to="/blog">
                Go to Blog Page
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </Link>
            </div>
          </Form> 
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLoginUser
};

const mapStateToProps = state => {
  return {
      isAuthenticating: state.authReducer.isAuthenticating,
      isAuthenticated: state.authReducer.isAuthenticated,
      loginSuccessMessage: state.authReducer.loginSuccessMessage,
      errorloggingUser: state.authReducer.errorloggingUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// @include mdm {
//   width: 700px;
//   margin: -225px 0 0 -350px;
// }
// @include smm {
//   width: 300px;
//   margin: -225px 0 0 -150px;
// }
