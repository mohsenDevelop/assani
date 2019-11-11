import axios from "axios";
import { GET_POSTS, ERROR_POSTS } from "../type";

/**
 * Login Action
 */

export const getPosts = () => async dispatch => {

    try {
        const res = await axios.get("http://api.asanshahr.com/api/offers?pageSize=10&pageNumber=1");
        console.log("res", res);
        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_POSTS
        });
    }
};
