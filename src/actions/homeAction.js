import axios from 'axios';
import {
    GET_BLOG_PEEK,
    GET_BLOG_PEEK_SUCCESS,
    GET_BLOG_PEEK_FAIL } from '../constants';


export function getBlogPeek() {
    return {
      type: GET_BLOG_PEEK
    };
}

export function getBlogPeekSuccess(blogPeek) {
    return {
        type: GET_BLOG_PEEK_SUCCESS,
        payload: blogPeek
    };
}

export function getBlogPeekFail(errorfetchingBlogPeek) {
    return {
        type: GET_BLOG_PEEK_FAIL,
        payload: errorfetchingBlogPeek
    };
}

export const fetchBlogPeek = () => async(dispatch) => {
    dispatch(getBlogPeek());
    try {
        const response = await axios.get('/posts/peeks');
        dispatch(getBlogPeekSuccess(response.data.blogPeek));
      } catch (error) {
        dispatch(getBlogPeekFail(error));
      }
}
