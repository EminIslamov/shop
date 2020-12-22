import React from 'react';
import checkoutLogo from "./shopping-cart-solid.svg"
function Checkout(props) {
const filtered = props.product.filter((item) => {
 if (item.bought === true){
     return true;
 }
 return false;

});

    return (
        <div className="checkout">
          <img src={checkoutLogo}/>
          <span className="counter">{filtered.length}</span>
        </div>
    );
}

export default Checkout;