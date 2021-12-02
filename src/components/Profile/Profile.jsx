import React from 'react';
import MyInfo from "./MyInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return (
        <div className="profile">
            <MyInfo/>
            <MyPosts PostData={props.state.PostData} addNewPost={props.addNewPost}/>
        </div>
    )
}
export default Profile;