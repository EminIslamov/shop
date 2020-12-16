import React from 'react';
import checkoutLogo from "./shopping-cart-solid.svg"
function Checkout(props) {
    return (
        <div className="checkout">
          <img src={checkoutLogo}/>
          <span className="counter">0</span>
        </div>
    );
}

export default Checkout;