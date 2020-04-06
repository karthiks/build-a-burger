import React from 'react';
import Aux from "../hoc/aux";
import Button from './utils/button';

const OrderSummary = (props) => {
    let ingredients = [];
    for (let k in props.ingredients) {
        let v = props.ingredients[k];
        if (v>0) {
            ingredients.push(<li key={k}><span style={{textTransform:'capitalize'}}>{k}</span> : {v}</li>);
        }
    };
    return (
        <Aux>
            <div> Order Summary</div>
            <ul>
                {ingredients}
            </ul>
            <p><strong> Total Price = {props.price.toFixed(2) }</strong></p>
            <p>Continue to Checkout??</p>
            <Button buttonType="Danger" clicked={props.cancelOrder}>Cancel</Button>
            <Button buttonType="Success" clicked={props.checkout}>Go for it!!</Button>
        </Aux>
    );
};

export default OrderSummary;