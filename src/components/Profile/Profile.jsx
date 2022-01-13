import React from 'react';
import MyInfo from "./MyInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className="profile">
            <MyInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;