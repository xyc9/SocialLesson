import React from 'react';
import NewPost from "./NewPost";
import PostsList from "./Posts-list";
const MyPosts = () =>{
    return (
      <div>
        <NewPost/>
        <PostsList/>
      </div>
    );
}
export default MyPosts;