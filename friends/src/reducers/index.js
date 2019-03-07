import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions';

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
            
        default:
            return state;
    }
}