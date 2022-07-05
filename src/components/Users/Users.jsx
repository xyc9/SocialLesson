import React from "react";
import avatar from "../../img/avatar-default.jpg";


let Users = (props) =>{

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className="Users_page">

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
            <div className="pagination">
                {pages.map(p => <span onClick={() => {props.onPageChanged(p)}} className={props.currentPage === p && "selectedPage"}>{p}</span>)}
            </div>
        </div>
    )
}
export default Users