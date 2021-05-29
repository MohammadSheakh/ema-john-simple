//rsc
import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    console.log("this is : ", cart);
    // total cost hishab korar jonno amra reduce er help nibo
    // reduce hocche array er last element mane .. last product theke check korte korte first product er kase ashbe.. hishab korte korte

    const total = Math.round(cart.reduce((total, prd) => total + prd.price, 0)); // total er initial value 0 set kore dilam

    // normal vabeo ei calculation ta kora shomvob .
    /**
     *
     * let total = 0;
     * for(let i = 0 ; i< cart.length; i++)
     * {
     *    const product = cart[i];
     *    total = total + product.price;
     * }
     */

    // conditional Shipping cost calculation
    let shipping = 0; // basic shipping 60 taka
    if (total > 0 && total < 2000) {
        shipping = 60;
    } else if (total > 2000) {
        shipping = 100;
    }

    const tax = (total / 10).toFixed(2); // eta ke ami 2 decimal porjonto dekhaite chai

    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h5> Order Summery : </h5>
            {/* {cart.length} */}
            <p>Items Ordered : {cart.length}</p>
            <p>Total Cost : {total}</p>
            <p>
                <small>Shipping Cost : {shipping}</small>
            </p>
            <p>
                <small>Tax : {tax}</small>
            </p>
            <p>Net Total : {grandTotal}</p>
        </div>
    );
};

export default Cart;
