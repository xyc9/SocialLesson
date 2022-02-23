import React from "react";


const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {id: 1, FullName: 'Артем', avatar: 'https://avatarfiles.alphacoders.com/792/thumb-1920-79295.jpg', followed: true, location: {city: 'Odessa', country: 'Ukraine'}},
            {id: 2, FullName: 'Саша', avatar: 'https://avatarfiles.alphacoders.com/792/thumb-1920-79295.jpg', followed: false, location: {city: 'Odessa', country: 'Ukraine'}},
            {id: 3, FullName: 'Дима', avatar: 'https://avatarfiles.alphacoders.com/792/thumb-1920-79295.jpg', followed: false, location: {city: 'Odessa', country: 'Ukraine'}}
        ])
    }
    return (
        <div className="Users_page">
           <div className="Users_list">
               {props.users.map(u => <div key={u.id} className="User_item">
                   <div className="userItem_left">
                       <div className="UserAva">
                           <img src={u.avatar} alt=""/>
                       </div>
                       {u.followed
                           ? <button onClick = {()=>{ props.unfollow(u.id)}}>Unfollow </button>
                           : <button onClick = {() => {props.follow(u.id) } } >Follow</button> }
                   </div>
                   <div className="userItem_right">
                       <div className="left">
                           <p>{u.FullName}</p>
                       </div>
                       <div className="right">
                           <p>{u.location.country}</p>
                           <p>{u.location.city}</p>
                       </div>
                   </div>
               </div>)}

           </div>
        </div>
    )
}
export default Users;