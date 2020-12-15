import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import Checkout from "./Checkout";

function Header(props) {
    return (
        <div>
            <div className="logo">
                <Logo />
            </div>
            <div className="menu">
                <Menu />
            </div>
            <div className="checkout">
                <Checkout />
            </div>

        </div>
    );
}

export default Header;