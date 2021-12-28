import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) =>{

    let state = props.store.getState();
    let AddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let OnPostChange = (text) =>{
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return(
        <MyPosts OnAddPost={AddPost} OnPostChange={OnPostChange}  PostData={state.ProfilePage.PostData}
                 NewPostText={state.ProfilePage.NewPostText} />
    );
}
export default MyPostsContainer;