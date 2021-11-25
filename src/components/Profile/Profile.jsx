import React from 'react';
import MyInfo from "./MyInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className="profile">
            <MyInfo/>
            <MyPosts PostData={props.PostData}/>
        </div>
    )
}
export default Profile;