import axios from 'axios';
import {
    POST_SUBSCRIBER,
    POST_SUBSCRIBER_SUCCESS,
    POST_SUBSCRIBER_FAIL } from '../constants';


export function postSubscriber() {
    return {
      type: POST_SUBSCRIBER
    };
}

export function postSubscriberSuccess(successPostingSubscriber) {
    return {
        type: POST_SUBSCRIBER_SUCCESS,
        payload: successPostingSubscriber
    };
}

export function postSubscriberFail(errorPostingSubscriber) {
    return {
        type: POST_SUBSCRIBER_FAIL,
        payload: errorPostingSubscriber
    };
}


export const subscribeUser = (email) => async(dispatch) => {
    dispatch(postSubscriber());
    const data = {
        email
    };
    try {
        const response = await axios.post('/contact/subscribe', data);
        dispatch(postSubscriberSuccess(response.data));
      } catch (error) {
        dispatch(postSubscriberFail(error.response.data.error));
      }
}
