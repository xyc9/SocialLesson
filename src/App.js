import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import { Route} from "react-router-dom";
import DialogsContainer from "./components/DIalogs/DialogsContainer";


const App = (props) => {
    return (
            <div className="App">
                <Header state={props.state.Header}/>
                 <Route path='/profile' render={ ()=> <Profile store={props.store}/> }/>
                 <Route path='/messages' render={ ()=> <DialogsContainer store={props.store}/>}/>
                <Navbar/>
            </div>
    );
}

export default App;
