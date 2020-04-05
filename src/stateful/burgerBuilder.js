import React, { Component } from 'react';
import Aux from '../hoc/aux';
import Burger from '../stateless/burger'
import BuildControls from '../stateless/buildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.75,
    cheese: 0.4,
    meat: 1.25,
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0,
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] += 1;
        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: ingredients,
            totalPrice: newTotalPrice
        });
    };

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type]===0) return;
        const ingredients = { ...this.state.ingredients };
        ingredients[type] -= 1;
        const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            ingredients: ingredients,
            totalPrice: newTotalPrice
        });
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;