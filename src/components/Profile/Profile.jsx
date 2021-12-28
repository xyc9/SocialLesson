import React from 'react';
import MyInfo from "./MyInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className="profile">
            <MyInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}
export default Profile;