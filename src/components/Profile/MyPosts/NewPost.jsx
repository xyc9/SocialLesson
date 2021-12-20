import React from 'react';

const NewPost = (props) =>{

    let newPostText = React.createRef();
    let addPost = () => {
        props.dispatch({type: 'ADD-NEW-POST'});
    };

    let OnPostChange = () =>{
        let text =  newPostText.current.value;
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', NewText: text})
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