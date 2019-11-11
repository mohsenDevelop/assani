import {
    GET_POSTS
} from "../type";
import { IPostState } from "../interfaces";

const initialState: IPostState = {
    posts: []
};

export default (state = initialState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }

};