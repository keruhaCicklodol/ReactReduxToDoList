import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/postsReducer';
import userReducer from './reducers/userReducer';

export default configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
    },
});
