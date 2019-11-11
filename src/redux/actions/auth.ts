import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../type";

/**
 * Login Action
 */

export const loginUser = (userName: string, password: string) => dispatch => {
    if (userName === "mohsen@gmail.com" && password === "1234") {
        dispatch({
            type: LOGIN_SUCCESS
        });
    } else {
        dispatch({
            type: LOGIN_FAIL
        });
    }
};


export const logOut = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};
