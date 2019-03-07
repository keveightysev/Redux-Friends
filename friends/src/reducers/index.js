import { LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADD_START,
    ADD_SUCCESS,
    ADD_FAILURE,
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_FAILURE } from '../actions';

const initialState = {
    friends: [],
    deletingFriend: false,
    fetchingFriends: false,
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
        case FETCH_START:
            return {
                ...state,
                fetchingFriends: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload,
            }
        case FETCH_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload,
            }
        case ADD_START:
            return {
                ...state,
                savingFriends: true
            }
        case ADD_SUCCESS:
            return {
                ...state,
                savingFriends: false,
                friends: action.payload,
            }
        case ADD_FAILURE:
            return {
                ...state,
                savingFriends: false,
                error: action.payload,
            }
        case DELETE_START:
            return {
                ...state,
                deletingFriends: true
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                deletingFriends: false,
                friends: action.payload,
            }
        case DELETE_FAILURE:
            return {
                ...state,
                deletingFriends: false,
                error: action.payload,
            }
        default:
            return state;
    }
}