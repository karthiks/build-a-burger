import React from 'react';
import classes from './burger.module.css'
import BurgerIngredient from './burgerIngredient';

const Burger = props => {
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;