import React from 'react'
import BuildControl from './buildControl'
import classes from './buildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
        {/* 'controls' array is mapped over to pass labels and types onto each control */ }
        {
            controls.map((ctrl) => {
                return (
                    <BuildControl
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

export default BuildControls;