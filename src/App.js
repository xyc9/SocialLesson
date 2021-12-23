import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/DIalogs/Dialogs";
import { Route} from "react-router-dom";


const App = (props) => {
    return (
            <div className="App">
                <Header state={props.state.Header}/>
                 <Route path='/profile' render={ ()=> <Profile state={props.state.ProfilePage} dispatch={props.dispatch}/> }/>
                 <Route path='/messages' render={ ()=> <Dialogs state={props.state.DialogPage} dispatch={props.dispatch}/>}/>
                <Route path='/friend' render={ ()=> <Profile state={props.state.ProfilePage}/> }/>
                <Navbar/>
            </div>
    );
}

export default App;
