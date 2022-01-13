import React from 'react';
import {addMessageActionCreator, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();

                let OnMessageBodyChange = (text) => {
                  store.dispatch(updateNewMessageBody(text));
                }
                let OnAddMessage = () => {
                   store.dispatch(addMessageActionCreator());
                };
                return (
                    <Dialogs OnMessageBodyChange={OnMessageBodyChange} OnAddMessage={OnAddMessage}
                             DialogPage={state.DialogPage}/>)
            }
        }

        </StoreContext.Consumer>
    )


}
export default DialogsContainer;