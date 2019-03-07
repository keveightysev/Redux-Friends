
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
        default:
            return state;
    }
}