import React from 'react';

const NewPost = (props) =>{
    let newPostText = React.createRef();
    let addPost =()=> {
        let text =  newPostText.current.value;
        props.addNewPost(text);
        newPostText.current.value =''
    };

    let clearePostText = () => {newPostText.current.value =''};

    return(
        <div className="newPost-side">
            <textarea ref={newPostText}> </textarea>
            <button onClick={addPost}>New Message</button>
            <button onClick={clearePostText}>cleare</button>
        </div>
    )
}
export default NewPost;