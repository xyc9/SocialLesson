import React from 'react';
import UserDialog from "./UserDialog/UserDialog";
import UserItem from "./UserItem/UserItem";

const Dialogs = (props) => {

    let UserArray = props.UserData.map( (u) => <li><UserItem id={u.id} username={u.username}/></li>);
    let DialogArray = props.DialogData.map( (d) => <li><UserDialog message={d.message} id={d.id}/></li>);
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