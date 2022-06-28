import React from "react";
import * as axios from "axios";
import avatar from "../../img/avatar-default.jpg";



const Users = (props) => {
    let getUsers = () =>{
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            })
        }
    }
    return (
        <div className="Users_page">
            <button onClick={getUsers}>загрузить пользователей</button>
            <div className="Users_list">
                {props.users.map(u => <div key={u.id} className="User_item">
                    <div className="userItem_left">
                        <div className="UserAva">
                            <img src={u.photos.small != null ? u.photos.small : avatar} alt=""/>
                        </div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow </button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
        </div>
    )
}
export default Users;