import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/profile'>HOME</NavLink></li>
                <li><NavLink to='/messages'>Messages</NavLink></li>
                <li><NavLink to='/friend'>Friend</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;