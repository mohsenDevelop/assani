import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "../type";
import { IAuthState } from "../interfaces";

const initialState: IAuthState = {
    isAuthenticated: undefined,
};

export default (state = initialState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }

};