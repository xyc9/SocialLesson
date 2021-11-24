import React from 'react';
import {NavLink} from "react-router-dom";


const UserItem = (props) => {
    let Link = "/messages/" + props.id;
    return (
        <NavLink to={Link}>{props.username}</NavLink>
    )
}

export default UserItem;