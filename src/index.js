import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import configureStore from './stores/configureStore';
import {
    Router,
    Route,
    Switch
    } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './index.scss';
import { Login } from './components/Auth';
import { Home } from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

const store = configureStore();
axios.defaults.baseURL = 'https://blogprofile.herokuapp.com/api/v1';

const app = document.getElementById('root');
const history = createBrowserHistory();

render(
    <Provider store={store}>
        <Router history={history}>
        <Switch>
            <Route
                exact
                path="/"
                component={Login}
            />
            <Route
                path="/dashboard"
                component={Home}
            />
        </Switch>
        </Router>
    </Provider>, app);
registerServiceWorker();
