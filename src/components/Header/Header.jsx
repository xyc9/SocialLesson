import React from 'react';

const Header = () => {
    return (
        <header>
            <ul>
                <li><a href="http://localhost:3000/">LOGO</a></li>
            </ul>
            <div className="header__right-side">
                <p>Друзья Онлайн:</p>

            <ul className="fiends-online">
            </ul>
            </div>
        </header>
    )
}
export default Header;