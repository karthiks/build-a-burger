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
    transformedIngredients = transformedIngredients.reduce((arr, el) => {
        return arr.concat(el)
    }, []);
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
    ingredients: PropTypes.shape({
        "bread-top" : PropTypes.number,
        "meat" : PropTypes.number,
        "cheese" : PropTypes.number,
        "salad" : PropTypes.number,
        "bacon" : PropTypes.number,
        "bread-bottom" : PropTypes.number
    })
}

export default Burger;