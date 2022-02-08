const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


let initialState = {

    DialogData: [
        {
            id: '1', message: '1'
        },
        {
            id: '2', message: '3'
        },
        {
            id: '3', message: '3'
        },
        {
            id: '14', message: '4'
        },
    ],
    UserData: [
        {
            id: '1', username: 'user1'
        },
        {
            id: '2', username: 'user2'
        },
        {
            id: '3', username: 'user3'
        }
    ],
    NewMessageText : 'qwe'
}

let DialogsReducer = (state = initialState,action) => {
    switch (action.type){
        case ADD_NEW_MESSAGE:{
            let NewMessage = {id: '1', message: state.NewMessageText}
            let newState = {...state}
            newState.DialogData = [...state.DialogData]
            newState.DialogData.push(NewMessage);
            newState.NewMessageText = '';
            return newState;
        }
        case UPDATE_NEW_MESSAGE_BODY :{
            let newState = {...state}
            newState.NewMessageText = action.NewMessageBody;
            return newState;
        }
        default :
            return state;
    }
}
export let updateNewMessageBody = (text)=>{
    return({type:UPDATE_NEW_MESSAGE_BODY, NewMessageBody : text})
}

export let addMessageActionCreator = () =>{
    return({type: ADD_NEW_MESSAGE})
}



export default DialogsReducer;