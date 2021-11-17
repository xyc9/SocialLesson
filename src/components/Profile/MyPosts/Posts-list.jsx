import React from 'react';
import Post from "./Post";

const PostsList = () =>{
    return(<div>
        <Post message="1" likeCount='1'/>
        <Post message='2' likeCount='2'/>
        <Post message='3' likeCount='3'/>
        <Post message='4' likeCount='4'/>
        </div>
        )
}
export default PostsList;