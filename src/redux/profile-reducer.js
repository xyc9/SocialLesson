const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let ProfileReducer = (state,action) => {
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
    return({type:UPDATE_NEW_POST_TEXT , NewText: text})
}

export default ProfileReducer;