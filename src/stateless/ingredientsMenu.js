import React from 'react'
import IngredientsMenuItem from './ingredientsMenuItem'
import classes from './ingredientsMenu.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
];

const IngredientsMenu = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Price Now is <strong>{props.price}</strong></p>
        {/* 'controls' array is mapped over to pass labels and types onto each control */ }
        {
            controls.map((ctrl) => {
                return (
                    <IngredientsMenuItem
                        key={ctrl.label}
                        label={ctrl.label}
                        addIngredient={() => props.addIngredient(ctrl.type)}
                        removeIngredient={() => props.removeIngredient(ctrl.type)}
                        isNotYetAdded={props.ingredients[ctrl.type]<1}
                    />
                )
            })
        }
        </div>
    );
};

export default IngredientsMenu;