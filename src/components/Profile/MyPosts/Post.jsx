import React from 'react';

const Post = (props) =>{
    return(
        <div className="Post-item">
            <img src="https://avatarfiles.alphacoders.com/792/thumb-1920-79295.jpg" alt=""/>
            {props.message}
            <p>
               Лайки : {props.likeCount}
            </p>

        </div>
    )
}
export default Post;