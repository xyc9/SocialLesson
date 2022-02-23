import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {

            dispatch(followAC(userId));
        },
        unfollow: (userId) => {

            dispatch(unfollowAC(userId));
        },
        setUsers: (usersList) => {
            dispatch(setUsersAC(usersList));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;