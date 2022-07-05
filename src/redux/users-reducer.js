const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize : 10,
    totalCount : 50,
    currentPage :1 ,
    isFetching : false,
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
                users: action.usersList
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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
export let setCurrentPageAC = (currentPage) => {
    return ({type: SET_CURRENT_PAGE, currentPage})
}
export let setTotalUsersCountAC = (totalUsersCount) => {
    return ({type: SET_TOTAL_USER_COUNT, totalUsersCount})
}
export let toggleIsFetchingAC = (isFetching) => {
    return ({type: TOGGLE_IS_FETCHING, isFetching})
}
export default UsersReducer;