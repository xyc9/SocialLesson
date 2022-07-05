import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import preloader from "../../img/preloader.gif";
import Users from "./Users";


class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
            // this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render() {
        return <>

            { this.props.isFetching ? <div className="preloader-container"><img src={preloader} alt=""/></div>: null}
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalCount: state.UsersPage.totalCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (currentPage) => {
            dispatch(setTotalUsersCountAC(currentPage))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);


export default UsersContainer;