import React from 'react';
import UserDialog from "./UserDialog/UserDialog";
import UserItem from "./UserItem/UserItem";

const Dialogs = (props) => {

    let UserArray = props.DialogPage.UserData.map( (u) => <li key={u.id}><UserItem id={u.id}  username={u.username}/></li>);
    let DialogArray = props.DialogPage.DialogData.map( (d) => <li  key={d.id}><UserDialog message={d.message} id={d.id}/></li>);

    let OnMessageBodyChange = (e) =>{
        let NewMessageBody =  e.target.value;
        props.OnMessageBodyChange(NewMessageBody);
    }
    let addMessage = () => {
        props.OnAddMessage();
    };
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
                <div>
                    <textarea value={props.DialogPage.NewMessageText} onChange={OnMessageBodyChange}> </textarea>
                    <button onClick={addMessage}> отправить</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;