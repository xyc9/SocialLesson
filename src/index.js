import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import App from "./App";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

let rerenderALlTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addNewPost={store.addNewPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderALlTree(store.getState());
store.subscribe(rerenderALlTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
