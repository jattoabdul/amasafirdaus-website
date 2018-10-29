import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import configureStore from './stores/configureStore';
import {
    Router,
    Route,
    Switch,
    Redirect
    } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import createBrowserHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './index.scss';
import { Login } from './components/Auth';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Blog, SingleBlog } from './components/Blog';
import { Admin } from './components/Admin';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore();
// axios.defaults.baseURL = 'http://localhost:7000/api/v1';
axios.defaults.baseURL = 'https://firdausamasablogapi.herokuapp.com/api/v1';

const app = document.getElementById('root');
const history = createBrowserHistory();

(function() {
    const token = sessionStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['x-access-token'] = token;
    } else {
        axios.defaults.headers.common['x-access-token'] = null;
        /*if setting null does not remove `Authorization` header then try     
          delete axios.defaults.headers.common['x-access-token'];
        */
    }
})();

const isTokenExpired = () => {
    const token = jwt.decode(JSON.parse(sessionStorage.getItem('token')).token);
    const date = new Date(0);
    date.setUTCDate(token.exp);
    return date < new Date();
};   

const isAuthenticated = () => {
    const authState = sessionStorage.getItem('token') !== null &&
        isTokenExpired !== true;
    return authState;
};

render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
                {/*<Route path="/resetpassword" component={ResetPassword} />
                <Route
                    path="/updatepassword/:hash"
                    component={UpdatePassword}
                />*/}
                <Route
                    exact
                    path="/admin"
                    render={() =>
                        (isAuthenticated() ? (<Redirect to={{ pathname: '/admin/dashboard' }} />)
                        : (<Redirect to={{ pathname: '/admin/login' }} />))}
                />
                <Route
                    path="/admin/login"
                    render={props =>
                        (isAuthenticated() ? (<Redirect to={{ pathname: '/admin/dashboard' }} />)
                        : (<Login {...props} />))}
                />
                {<Route
                    path="/admin/dashboard"
                    render={props =>
                        (isAuthenticated() ? (<Admin {...props} />)
                        : (<Redirect to={{ pathname: '/admin/login' }} />))}
                />}
                <Route
                    exact
                    path="/contact"
                    component={Contact}
                />
                <Route
                    exact
                    path="/login"
                    component={Login}
                />
                <Route
                    exact
                    path="/blog"
                    component={Blog}
                />
                <Route
                    exact
                    path="/blog/:id/:slug"
                    component={SingleBlog}
                />
            </Switch>
        </Router>
    </Provider>, app);
registerServiceWorker();
