import {
    POST_SUBSCRIBER,
    POST_SUBSCRIBER_SUCCESS,
    POST_SUBSCRIBER_FAIL } from '../constants';
    
    const initialState = {
      successPostingSubscriber: {},
      errorPostingSubscriber: {},
      isPostingSubscriber: false
    };
    
    const contactReducer = (state = initialState, action) => {
      const { type, payload } = action;
        switch (type) {
          case POST_SUBSCRIBER:
            return {
              ...state,
              isPostingSubscriber: true,
              errorPostingSubscriber: {}
            }
          case POST_SUBSCRIBER_SUCCESS:
            return {
              ...state,
              successPostingSubscriber: payload.data,
              isPostingSubscriber: false
            }
          case POST_SUBSCRIBER_FAIL:
            return {
              ...state,
              successPostingSubscriber: {},
              errorPostingSubscriber: payload,
              isPostingSubscriber: false
            }
         default:
          return state
        }
       }
    
    
    export default contactReducer;