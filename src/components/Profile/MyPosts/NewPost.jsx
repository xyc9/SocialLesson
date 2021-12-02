import React from 'react';

const NewPost = () =>{
    let newPostText = React.createRef();
    let text = () =>{alert(newPostText.current.value)};
    let clearePostText = () => {newPostText.current.value =''};
    return(
        <div className="newPost-side">
            <textarea ref={newPostText}></textarea>
            <button onClick={text}>New Message</button>
            <button onClick={clearePostText}>cleare</button>
        </div>
    )
}
export default NewPost;