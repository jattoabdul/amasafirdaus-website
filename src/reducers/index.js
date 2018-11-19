import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import blogReducer from './blogReducer';
import contactReducer from './contactReducer';
import authReducer from './authReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    homeReducer,
    blogReducer,
    contactReducer,
    authReducer,
    router: routerReducer
});

export default rootReducer;