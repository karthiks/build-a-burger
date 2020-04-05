import React from 'react';
import PropTypes from 'prop-types';
import classes from './burger.module.css';
import BurgerIngredient from './burgerIngredient';

const Burger = (props) => {
    const ingredientsList = Object.keys(props.ingredients);
    
    let transformedIngredients = ingredientsList.map(ing => {
        const ing_count = props.ingredients[ing];
        return [...Array(ing_count)].map( (_,index) => {
            return (<BurgerIngredient type={ing} key={ing + index} />);
        });
    });
    // Flattening the array with reduce
    // const flatten = (arr,el) => arr.concat(el);
    // transformedIngredients = transformedIngredients.reduce(flatten, []);
    transformedIngredients = transformedIngredients.flat(); // Defaults to 1 level.
    // console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    };

    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

Burger.propTypes = {
    ingredients: function(props, propName, componentName) {
        const ingredients = props[propName];
        const ingredientsList = Object.keys(ingredients);
        if (typeof(ingredients) !== typeof({})) {
            return new Error(`Invalid prop "${propName}" supplied to "${componentName}". Validation Failed!`);
        }
        const predefinedIngredients = ["salad", "bacon", "cheese", "meat"];
        const hasUnknownIngredients = ing=>!predefinedIngredients.includes(ing);
        const undefinedIngredients = ingredientsList.filter(k => hasUnknownIngredients(k));
        if (undefinedIngredients.length > 0) {
            return new Error(`Invalid prop "${propName}" supplied to "${componentName}". 
            Validation Failed because of unknown ingredients like "${undefinedIngredients}"`);
        }
    }
};

export default Burger;