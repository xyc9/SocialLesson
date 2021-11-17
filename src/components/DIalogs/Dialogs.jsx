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


    return (
        <div className="Dialogs_page">
            <div className="Dialogs_UserList">
                <ul>
                    <li><UserItem id="1" username="user1"/></li>
                    <li><UserItem id="2" username="user2"/></li>
                    <li><UserItem id="3" username="user3"/></li>


                </ul>
            </div>
            <div className="Dialogs_message">
                <ul>
                    <li>
                        <UserDialog message="first message"/>

                    </li>
                    <li>
                        <UserDialog message="second message"/>
                    </li>
                    <li>
                        <UserDialog message="third message"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Dialogs;