import React from 'react';
import {addMessageActionCreator, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        DialogPage: state.DialogPage
    };
}
let mapDispatchToProps = (dispatch) =>{
    return{
        OnMessageBodyChange : (text) => {
           dispatch(updateNewMessageBody(text));
        },
        OnAddMessage : () => {
           dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);


export default DialogsContainer;