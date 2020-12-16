import React from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu";
import Checkout from "./Checkout/Checkout";

function Header() {
    return (
        <div className="header">
            <Logo/>
            <Menu />
            <Checkout />
            <a className="logout" href="#">выход</a>
        </div>
    );
}

export default Header;