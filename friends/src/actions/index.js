import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => async dispatch => {
    dispatch({ type: LOGIN_START });
    try {
        const res = await axios.post('http://localhost:5000/api/login', creds);
        localStorage.setItem("token", res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    } catch (err) {
        dispatch({ type: LOGIN_FAILURE, error: err.message });
    };
};