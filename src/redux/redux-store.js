import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import HeaderReducer from "./header-reducer";
import UsersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";

let reducers = combineReducers({
    ProfilePage : ProfileReducer,
    DialogPage : DialogsReducer,
    UsersPage : UsersReducer,
    Header : HeaderReducer,
    Auth: AuthReducer
});

let store = createStore(reducers);
window.store = store;


export default store;
