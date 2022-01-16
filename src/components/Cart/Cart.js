import React from 'react';
import'./Cart.css'

const Cart = (props) => {
// console.log(props.length)

    return (
        <div className='cart'>
            <h1>Parson:{props.click.length}</h1>
            <h3></h3>
        </div>
    );
};

export default Cart;