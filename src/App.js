import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/DIalogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                 <Route path='/profile' component={Profile}/>
                 <Route path='/messages' component={Dialogs}/>
                  <Route path='/friend' component={Profile}/>

                <Navbar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
