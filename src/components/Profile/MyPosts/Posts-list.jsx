import React from 'react';
import Post from "./Post";

const PostsList = (props) =>{

    let PostArray = props.PostData.map((p)=><Post message={p.message} key={p.id} likeCount={p.likeCount}/>)


    return(
        <div>
            {PostArray}
        </div>
        )
}
export default PostsList;