import React from 'react';
import FriendOnline from "./FrinedOnline";


const Header = (props) => {
    let FiendsOnline = props.state.FriendsOnline.map( f => <li><FriendOnline id={f.id} name={f.name} avatar={f.avatar}/></li>)
    return (
        <header>
            <ul>
                <li><a href="http://localhost:3000/">LOGO</a></li>
            </ul>
            <div className="header__right-side">
                <p>Друзья Онлайн:</p>

            <ul className="fiends-online">

                {FiendsOnline}
            </ul>
            </div>
        </header>
    )
}
export default Header;