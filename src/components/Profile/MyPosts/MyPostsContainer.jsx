import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                let AddPost = () => {
                   store.dispatch(addPostActionCreator());
                };

                let OnPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                  store.dispatch(action);
                }
                return (
                    <MyPosts OnAddPost={AddPost} OnPostChange={OnPostChange} PostData={state.ProfilePage.PostData}
                             NewPostText={state.ProfilePage.NewPostText}/>
                );
            }
        }

        </StoreContext.Consumer>
    )


}
export default MyPostsContainer;