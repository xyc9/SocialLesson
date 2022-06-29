import React from "react";
import * as axios from "axios";
import avatar from "../../img/avatar-default.jpg";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items);
       })
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className="Users_page">

                <div className="Users_list">
                    {this.props.users.map(u => <div key={u.id} className="User_item">
                        <div className="userItem_left">
                            <div className="UserAva">
                                <img src={u.photos.small != null ? u.photos.small : avatar} alt=""/>
                            </div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow </button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                        <div className="userItem_right">
                            <div className="left">
                                <p>{u.name}</p>
                            </div>
                            <div className="right">
                                <p>"u.location.country"</p>
                                <p>"u.location.city"</p>
                            </div>
                        </div>
                    </div>)}

                </div>
                <div className="pagination">
                    {pages.map(p => <span onClick={() => {this.onPageChanged(p)}} className={this.props.currentPage === p && "selectedPage"}>{p}</span>)}
                </div>
            </div>
        )
    }
}

export default Users;