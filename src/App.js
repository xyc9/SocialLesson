import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import { Route} from "react-router-dom";
import DialogsContainer from "./components/DIalogs/DialogsContainer";



const App = () => {
    return (
            <div className="App">
                <Header />
                 <Route path='/profile' render={ ()=> <Profile /> }/>
                 <Route path='/messages' render={ ()=> <DialogsContainer />}/>
                <Navbar/>
            </div>
    );
}

export default App;
