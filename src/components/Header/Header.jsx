import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <ul>
                <li><a href="http://localhost:3000/">LOGO</a></li>
            </ul>
            <div className="header__right-side">
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header;