import React from 'react';


const cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = total / 10;

    const formateNumber =  num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>order summary:</h4>
            <p>Items ordered: {cart.length}</p>
            <p>product Price: {formateNumber (total)}</p>
            <p><small>Shipping: {formateNumber(shipping)}</small></p>
            <p><small>Tax + vat : {formateNumber(tax)}</small></p>
            <p>total Price: {formateNumber(total + shipping + tax)}</p>
        </div>
    );
};

export default cart;