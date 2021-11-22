import React from 'react';
import Post from "./Post";

const PostsList = () =>{

    let PostData = [
        { message : 'Первое сообщение' ,  likeCount : '0'},
        { message : '212321312312312' ,  likeCount : '2'},
        { message : '312312312312' ,  likeCount : '3'}
    ]
    let PostArray = PostData.map((p)=><Post message={p.message} likeCount={p.likeCount}/>)


    return(
        <div>
            {PostArray}
        </div>
        )
}
export default PostsList;