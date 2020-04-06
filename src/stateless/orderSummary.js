import React from 'react';
import Aux from "../hoc/aux";

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
            <p>Continue to Checkout??</p>
        </Aux>
    );
};

export default OrderSummary;