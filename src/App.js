import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route} from "react-router-dom";
import DialogsContainer from "./components/DIalogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = () => {
    return (
            <div className="App">
                <HeaderContainer />
                 <Route path='/profile/:userId?' render={ ()=> <ProfileContainer /> }/>
                 <Route path='/messages' render={ ()=> <DialogsContainer />}/>
                 <Route path='/users' render={ ()=> <UsersContainer />}/>
                <Navbar/>
            </div>
    );
}

export default App;
