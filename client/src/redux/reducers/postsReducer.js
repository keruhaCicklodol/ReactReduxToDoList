import { ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POST, } from '../types';

export default function postsReducer(state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_POST:
            return [...state, payload];
            case SET_POSTS:
                return payload;
                case DELETE_POST:
                    return state.filter((post) => post.id !== payload);
                    case UPDATE_POST:
                        return state.map((post) => (post.id === payload.id ? payload : post));
                        default:
                            return state;
    }
}