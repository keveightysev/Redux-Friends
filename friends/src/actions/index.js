import axios from 'axios';
import axiosWithAuth from '../axiosAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, error: err.message })
        }
    );

};

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetch = () => dispatch => {
    dispatch({ type: FETCH_START })
    axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err.message});
        })
}

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_START })
    axiosWithAuth().post('http://localhost:5000/api/friends', friend)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_FAILURE, payload: err.message })
        })
}

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_START })
    axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            dispatch({ type: DELETE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: DELETE_FAILURE, payload: err.message })
        })
}