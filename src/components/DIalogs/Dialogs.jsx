import React from 'react';
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    return (
        <p>{props.message}</p>
    )
}

const UserItem = (props) => {
    let Link = "/messages/" + props.id;
    return (
        <NavLink to={Link}>{props.username}</NavLink>
    )
}


const Dialogs = () => {
    let UserData = [
        {
            id: '1', username: 'user1'
        },
        {
            id: '2', username: 'user2'
        },
        {
            id: '3', username: 'user3'
        }
    ]
    let DialogData = [
        {
            id:'1',message:'1'
        },
        {
            id:'2',message:'3'
        },
        {
            id:'3',message:'3'
        },
        {
            id:'14',message:'4'
        },
    ]
    let UserArray = UserData.map( (u) => <li><UserItem id={u.id} username={u.username}/></li>);
    let DialogArray = DialogData.map( (d) => <li><UserDialog message={d.message} id={d.id}/></li>);
    return (
        <div className="Dialogs_page">
            <div className="Dialogs_UserList">
                <ul>
                    {UserArray}
                </ul>
            </div>
            <div className="Dialogs_message">
                <ul>
                    {DialogArray}
                </ul>
            </div>
        </div>
    )
}
export default Dialogs;