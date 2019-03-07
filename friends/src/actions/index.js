import axios from 'axios';
// import axiosWithAuth from '../axiosAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => 
            dispatch({ type: LOGIN_FAILURE, error: err.message })
        );

};