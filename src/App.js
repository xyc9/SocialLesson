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
                <Header/>
                 <Route path='/profile' render={ ()=> <Profile PostData={props.PostData}/> }/>
                 <Route path='/messages' render={ ()=> <Dialogs DialogData={props.DialogData} UserData={props.UserData}/>}/>
                <Route path='/friend' render={ ()=> <Profile PostData={props.PostData}/> }/>

                <Navbar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
