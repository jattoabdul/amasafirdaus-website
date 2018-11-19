import {
  GET_BLOG_PEEK,
  GET_BLOG_PEEK_SUCCESS,
  GET_BLOG_PEEK_FAIL } from '../constants';

const initialState = {
  blogPeek: {},
  isFetchingBlogPeek: false,
  errorfetchingBlogPeek: {},
};

const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;
    switch (type) {
      case GET_BLOG_PEEK:
        return {
          ...state,
          isFetchingBlogPeek: true
        }
      case GET_BLOG_PEEK_SUCCESS:
        return {
          ...state,
          blogPeek: payload,
          isFetchingBlogPeek: false
        }
      case GET_BLOG_PEEK_FAIL:
        return {
          ...state,
          errorfetchingBlogPeek: payload,
          isFetchingBlogPeek: false
        }
     default:
      return state
    }
   }


export default homeReducer;