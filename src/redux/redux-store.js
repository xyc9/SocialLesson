import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import HeaderReducer from "./header-reducer";
import UsersReducer from "./users-reducer";

let reducers = combineReducers({
    ProfilePage : ProfileReducer,
    DialogPage : DialogsReducer,
    UsersPage : UsersReducer,
    Header : HeaderReducer,
});

let store = createStore(reducers);
window.store = store;


export default store;
