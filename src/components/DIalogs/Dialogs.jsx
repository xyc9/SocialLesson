import React from 'react';
import {NavLink} from "react-router-dom";

const Dialogs = () =>{
    return(
        <div>
            <div className="Dialogs_UserList">
                <ul>
                    <li><NavLink to='/messages/1'>user1</NavLink></li>
                    <li><NavLink to='/messages/2'>user1</NavLink></li>
                    <li><NavLink to='/messages/3'>user1</NavLink></li>

                </ul>
            </div>
        </div>
    )
}
export default Dialogs;