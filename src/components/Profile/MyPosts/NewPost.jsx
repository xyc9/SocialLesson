import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const NewPost = (props) =>{

    let newPostText = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let OnPostChange = () =>{
        let text =  newPostText.current.value;
            props.dispatch(updateNewPostTextActionCreator(text))
    }
    return(
        <div className="newPost-side">
            <textarea ref={newPostText} onChange={OnPostChange} value={props.NewPostText}/>
            <button onClick={ addPost }>New Message</button>
            <button>cleare</button>
        </div>
    )
}
export default NewPost;