import React from 'react';
import MyInfo from "./MyInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <>
        <div className="profile">
            <MyInfo/>
            <MyPosts/>
        </div>
    </>
}
export default Profile;