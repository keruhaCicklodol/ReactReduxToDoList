import axios from 'axios';
import { ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POST } from '../types';

export const addPost = (payload) => ({type: ADD_POST, payload})
export const deletePost = (payload) => ({type: DELETE_POST, payload});
export const setPosts = (payload) => ({type: SET_POSTS, payload});
export const updatePost = (payload) => ({type: UPDATE_POST, payload});

export const fetchPosts = () => (dispatch) => {
    axios('/api/posts')
    .then((res) => dispatch(setPosts(res.data)))
    .catch(console.log);
};

export const submitPostAsync = (e, input, setInput) => (dispatch) => {
    e.preventDefault();
    axios.post('/api/posts', {input})
    .then((res) => {
        dispatch(addPost(res.data));
        setInput('');
    })
    .catch(console.log);
};

export const deletePostAsync = (id) => (dispatch) => {
    axios.delete(`/api/posts/${id}`)
    .then(()=> dispatch(deletePost(id)))
    .catch(console.log);
};

export const updatePostAsync = (post, input) => (dispatch) => {
    axios.patch(`/api/posts/${post.id}`, {input})
    .then((res) => dispatch(updatePost(res.data)))
    .catch(console.log);
};
