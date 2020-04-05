import React from 'react';
import IngredientsMenuItem from './ingredientsMenuItem';
import classes from './ingredientsMenu.module.css';
import PropTypes from 'prop-types';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
];

const IngredientsMenu = (props) => {
    const inglst = props.ingredients;
    const ingredientsAddedCount = Object.keys(inglst)
        .map(k => inglst[k])
        .reduce((sum,v)=>sum+v,0);
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
            <button 
                className={classes.OrderButton}
                disabled={ingredientsAddedCount<1}
            > Order Now </button>
        </div>
    );
};

IngredientsMenu.propTypes = {
    ingredients: function (props, propName, componentName) {
        const ingredients = props[propName];
        const ingredientsList = Object.keys(ingredients);
        if (typeof (ingredients) !== typeof ({})) {
            return new Error(`Invalid prop "${propName}" supplied to "${componentName}". Validation Failed!`);
        }
        const predefinedIngredients = ["salad", "bacon", "cheese", "meat"];
        const hasUnknownIngredients = ing => !predefinedIngredients.includes(ing);
        const undefinedIngredients = ingredientsList.filter(k => hasUnknownIngredients(k));
        if (undefinedIngredients.length > 0) {
            return new Error(`Invalid prop "${propName}" supplied to "${componentName}". 
            Validation Failed because of unknown ingredients like "${undefinedIngredients}"`);
        }
    },
    price: PropTypes.number.isRequired,
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired
}

export default IngredientsMenu;