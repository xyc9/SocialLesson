import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/DIalogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header state={props.state.Header}/>
                 <Route path='/profile' render={ ()=> <Profile state={props.state.ProfilePage} addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText}/> }/>
                 <Route path='/messages' render={ ()=> <Dialogs state={props.state.DialogPage} />}/>
                <Route path='/friend' render={ ()=> <Profile state={props.state.ProfilePage}/> }/>

                <Navbar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
