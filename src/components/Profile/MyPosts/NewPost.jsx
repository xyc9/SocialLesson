import React from 'react';

const NewPost = (props) =>{
    let newPostText = React.createRef();
    let addPost = () => {
        props.OnAddPost();
    };

    let OnPostChange = () =>{
        let text =  newPostText.current.value;
        props.OnPostChange(text);
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