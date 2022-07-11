const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    PostData: [
        {id: 1, message: 'Первое сообщение', likeCount: '0'},
        {id: 2, message: '212321312312312', likeCount: '2'},
        {id: 3, message: '312312312312', likeCount: '3'}
    ],
    NewPostText: 'post-text-1',
    profile:null,
}

let ProfileReducer = (state = initialState,action) => {

    switch (action.type){
        case ADD_NEW_POST :
            let text = state.NewPostText;
            return {
                ...state,
                PostData : [...state.PostData , {id: state.PostData.length+1 , message: text, likeCount: '0'}] ,
                NewPostText : ''
            };

        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                NewPostText : action.NewText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
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
export let setUserProfile = (profile)=>{
    return ({type: SET_USER_PROFILE, profile})
}

export default ProfileReducer;