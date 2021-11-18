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
    ]

    return (
        <div className="Dialogs_page">
            <div className="Dialogs_UserList">
                <ul>
                    <li><UserItem id={UserData[0].id} username={UserData[0].username}/></li>
                    <li><UserItem id={UserData[1].id} username={UserData[1].username}/></li>
                    <li><UserItem id={UserData[2].id} username={UserData[2].username}/></li>
                </ul>
            </div>
            <div className="Dialogs_message">
                <ul>
                    <li>
                        <UserDialog message={DialogData[0].message}/>

                    </li>
                    <li>
                        <UserDialog message={DialogData[1].message}/>
                    </li>
                    <li>
                        <UserDialog message={DialogData[2].message}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Dialogs;