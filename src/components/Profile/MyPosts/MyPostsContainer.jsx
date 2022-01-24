import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        NewPostText : state.ProfilePage.NewPostText,
        PostData : state.ProfilePage.PostData
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
       OnAddPost : () => {
            dispatch(addPostActionCreator());
        },
       OnPostChange : (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;