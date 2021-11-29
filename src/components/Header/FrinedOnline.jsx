import React from 'react';


const FriendOnline = (props) => {
    return (
        <div>
        <img src={props.avatar} alt=""/>
        <p>{props.name}</p>
        </div>
    )
}
export default FriendOnline;