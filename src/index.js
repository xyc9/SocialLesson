import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

let rerenderALlTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderALlTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderALlTree(state);
});
