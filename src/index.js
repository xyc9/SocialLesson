import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from "./App";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

let rerenderALlTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderALlTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderALlTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
