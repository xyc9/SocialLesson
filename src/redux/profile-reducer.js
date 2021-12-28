const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostData: [
        {id: 1, message: 'Первое сообщение', likeCount: '0'},
        {id: 2, message: '212321312312312', likeCount: '2'},
        {id: 3, message: '312312312312', likeCount: '3'}
    ],
    NewPostText: 'post-text-1'
}

let ProfileReducer = (state = initialState,action) => {
    switch (action.type){
        case ADD_NEW_POST :
            let NewPost = {id: 4, message: state.NewPostText, likeCount: '0'}
            state.PostData.push(NewPost);
            state.NewPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT :
            state.NewPostText = action.NewText;
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator = () =>{
    return({type: ADD_NEW_POST})
}
export let updateNewPostTextActionCreator = (text)=> {
    return ({type:UPDATE_NEW_POST_TEXT , NewText: text})
}

export default ProfileReducer;