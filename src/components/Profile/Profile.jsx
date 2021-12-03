import React from 'react';
import MyInfo from "./MyInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {

    return (
        <div className="profile">
            <MyInfo/>
            <MyPosts PostData={props.state.PostData} NewPostText={props.state.NewPostText} addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile;