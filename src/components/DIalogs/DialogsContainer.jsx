import React from 'react';
import {addMessageActionCreator, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let OnMessageBodyChange = (text) =>{
        props.store.dispatch(updateNewMessageBody(text));
    }
    let OnAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    return (<Dialogs OnMessageBodyChange={OnMessageBodyChange} OnAddMessage={OnAddMessage} DialogPage={state.DialogPage} />)
}
export default DialogsContainer;