import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
    LOGOUT_USER
} from '../constants';

const initialState = {
    isAuthenticating: false,
    isAuthenticated: false,
    token: null,
    currentUserData: {},
    loginSuccessMessage: '',
    errorloggingUser: ''
};

const authReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticating: true,
                isAuthenticated: false,
                errorloggingUser: ''
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                token: payload.token,
                loginSuccessMessage: payload.message
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                token: '',
                loginSuccessMessage: '',
                errorloggingUser: payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUserData: payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                token: ''
            };
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                currentUserData: {}
            };
        default:
            return state
    }
}


export default authReducer;
