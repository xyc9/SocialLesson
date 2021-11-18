import React from 'react';
import Post from "./Post";

const PostsList = () =>{

    let PostData = [
        { message : 'Первое сообщение' ,  likeCount : '0'},
        { message : '2' ,  likeCount : '2'},
        { message : '3' ,  likeCount : '3'}

    ]


    return(<div>
        <Post message={PostData[0].message} likeCount={PostData[0].likeCount}/>
        <Post message={PostData[1].message} likeCount={PostData[1].likeCount}/>
        <Post message={PostData[2].message} likeCount={PostData[2].likeCount}/>

        </div>
        )
}
export default PostsList;