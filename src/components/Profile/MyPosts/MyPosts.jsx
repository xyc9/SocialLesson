import React from 'react';
import NewPost from "./NewPost";
import PostsList from "./Posts-list";
const MyPosts = (props) =>{
    return (
      <div>
        <NewPost/>
        <PostsList PostData={props.PostData}/>
      </div>
    );
}
export default MyPosts;