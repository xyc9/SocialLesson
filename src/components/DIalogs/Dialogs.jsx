import React from 'react';
import UserDialog from "./UserDialog/UserDialog";
import UserItem from "./UserItem/UserItem";
import {addMessageActionCreator, updateNewMessageBody} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let UserArray = props.state.UserData.map( (u) => <li><UserItem id={u.id} username={u.username}/></li>);
    let DialogArray = props.state.DialogData.map( (d) => <li><UserDialog message={d.message} id={d.id}/></li>);

    let OnMessageBodyChange = (e) =>{
        let NewMessageBody =  e.target.value;
        props.dispatch(updateNewMessageBody(NewMessageBody));
    }
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
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
                    <textarea value={props.state.NewMessageText} onChange={OnMessageBodyChange}> </textarea>
                    <button onClick={addMessage}> отправить</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;