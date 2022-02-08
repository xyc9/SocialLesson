import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import HeaderReducer from "./header-reducer";

let reducers = combineReducers({
    ProfilePage : ProfileReducer,
    DialogPage : DialogsReducer,
    Header : HeaderReducer,
});

let store = createStore(reducers);
window.store = store;


export default store;
