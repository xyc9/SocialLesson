const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}
let UsersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;

                })
            };

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;

                })
            };
        case SET_USERS :
            return {
                ...state,
                users: [...state.users, ...action.usersList]
            }
        default:
            return state;
    }
}

export let followAC = (userId) => {

    return ({type: FOLLOW, userId})
}
export let unfollowAC = (userId) => {
    return ({type: UNFOLLOW, userId})
}
export let setUsersAC = (usersList) => {
    return ({type: SET_USERS, usersList})
}
export default UsersReducer;