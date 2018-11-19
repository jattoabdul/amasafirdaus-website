import axios from 'axios';
import {
    GET_BLOG_POSTS,
    GET_BLOG_POSTS_SUCCESS,
    GET_BLOG_POSTS_FAIL,
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    GET_BLOG_POST,
    GET_BLOG_POST_SUCCESS,
    GET_BLOG_POST_FAIL,
    ADD_BLOG,
    ADD_BLOG_SUCCESS,
    ADD_BLOG_FAIL,
    DELETE_BLOG,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,
    UPDATE_BLOG,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL } from '../constants';


export function getCategories() {
    return {
        type: GET_CATEGORIES
    };
}

export function getCategoriesSuccess(categories) {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: categories
    };
}

export function getCategoriesFail(errorfetchingCategories) {
    return {
        type: GET_CATEGORIES_FAIL,
        payload: errorfetchingCategories
    };
}

export const fetchCategories = () => async(dispatch) => {
    dispatch(getCategories());
    try {
        const response = await axios.get('/category');
        dispatch(getCategoriesSuccess(response.data));
        } catch (error) {
        dispatch(getCategoriesFail(error));
        }
}

export function getBlogPosts() {
    return {
      type: GET_BLOG_POSTS
    };
}

export function getBlogPostsSuccess(blogPosts) {
    return {
        type: GET_BLOG_POSTS_SUCCESS,
        payload: blogPosts
    };
}

export function getBlogPostsFail(errorfetchingBlogPosts) {
    return {
        type: GET_BLOG_POSTS_FAIL,
        payload: errorfetchingBlogPosts
    };
}

export const fetchBlogPosts = (page = 1, limit = 10) => async(dispatch) => {
    dispatch(getBlogPosts());
    try {
        const response = await axios.get(`/posts?page=${page}&limit=${limit}`);
        dispatch(getBlogPostsSuccess(response.data));
      } catch (error) {
        dispatch(getBlogPostsFail(error));
      }
}

export const fetchAdminBlogPosts = (page = 1, limit = 10) => async(dispatch) => {
    dispatch(getBlogPosts());
    try {
        const response = await axios.get(`/admin/posts?page=${page}&limit=${limit}`);
        dispatch(getBlogPostsSuccess(response.data));
      } catch (error) {
        dispatch(getBlogPostsFail(error));
      }
}

export const fetchBlogPostsByCategory = (categoryName='All', limit = 2, page = 1) => async(dispatch) => {
    dispatch(getBlogPosts());
    if (categoryName === 'All') {
        try {
            const response = await axios.get(`/posts?page=${page}&limit=${limit}`);
            dispatch(getBlogPostsSuccess(response.data));
          } catch (error) {
            dispatch(getBlogPostsFail(error));
          }
    } else {
        try {
            const response = await axios.get(`/posts/withcat?category=${categoryName}&limit=${limit}&page=${page}`);
            dispatch(getBlogPostsSuccess(response.data));
          } catch (error) {
            dispatch(getBlogPostsFail(error));
          }
    }
}

export function getBlogPost() {
    return {
      type: GET_BLOG_POST
    };
}

export function getBlogPostSuccess(blogPost) {
    return {
        type: GET_BLOG_POST_SUCCESS,
        payload: blogPost
    };
}

export function getBlogPostFail(errorfetchingBlogPost) {
    return {
        type: GET_BLOG_POST_FAIL,
        payload: errorfetchingBlogPost
    };
}


export const fetchBlogPost = (id) => async(dispatch) => {
    dispatch(getBlogPost());
    try {
        const response = await axios.get(`/post/${id}`);
        dispatch(getBlogPostSuccess(response.data));
      } catch (error) {
        dispatch(getBlogPostFail(error));
      }
}

export function createBlogPost() {
    return {
      type: ADD_BLOG
    };
}

export function createBlogPostSuccess(blogPost) {
    return {
        type: ADD_BLOG_SUCCESS,
        payload: blogPost
    };
}

export function createBlogPostFail(errorCreatingBlogPost) {
    return {
        type: ADD_BLOG_FAIL,
        payload: errorCreatingBlogPost
    };
}


export const createNewBlogPost = (postData) => async(dispatch) => {
    dispatch(createBlogPost());
    try {
        const response = await axios.post(`/post`, postData);
        dispatch(createBlogPostSuccess(response.data));
      } catch (error) {
        dispatch(createBlogPostFail(error));
      }
}

export function updateBlogPost() {
    return {
      type: UPDATE_BLOG
    };
  }

export function updateBlogPostSuccess(post) {
    return {
        type: UPDATE_BLOG_SUCCESS,
        payload: post
    };
}

export function updateBlogPostFail(errorUpdatingPost) {
    return {
        type: UPDATE_BLOG_FAIL,
        payload: errorUpdatingPost
    };
}


export const handleUpdateBlogPost = (postId, postData) => async(dispatch) => {
    dispatch(updateBlogPost());

    try {
        const response = await axios.patch(`/post/${postId}`, postData);
        dispatch(updateBlogPostSuccess(response.data));
    } catch (error) {
        dispatch(updateBlogPostFail(error));
      }
}

export function deleteBlogPost() {
    return {
      type: DELETE_BLOG
    };
}

export function deleteBlogPostSuccess(blogPostId) {
    return {
        type: DELETE_BLOG_SUCCESS,
        payload: blogPostId
    };
}

export function deleteBlogPostFail(errorDeletingBlogPost) {
    return {
        type: DELETE_BLOG_FAIL,
        payload: errorDeletingBlogPost
    };
}


export const removeBlogPost = (id) => async(dispatch) => {
    dispatch(deleteBlogPost());
    try {
        const response = await axios.delete(`/post/${id}`);
        if (response) {
            dispatch(deleteBlogPostSuccess(id));
        }
      } catch (error) {
        dispatch(deleteBlogPostFail(error));
      }
}
