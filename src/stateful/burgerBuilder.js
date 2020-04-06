import React, { Component } from 'react';
import Aux from '../hoc/aux';
import Burger from '../stateless/burger';
import IngredientsMenu from '../stateless/ingredientsMenu';
import Modal from '../stateless/utils/modal';
import OrderSummary from '../stateless/orderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.75,
    cheese: 0.4,
    meat: 1.25,
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 5,
            meat:0,
        },
        totalPrice: 4,
        orderNow:false
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

    placeOrder = () => {
        this.setState({
            orderNow: true
        });
    };

    cancelOrder = () => {
        this.setState({
            orderNow: false
        });
    }

    render() {
        const visibility = this.state.orderNow ? "visible" : "hidden";
        return (
            <Aux>
                <Modal 
                    style={{ visibility: visibility}}
                    orderNow={this.state.orderNow}
                    cancelOrder={this.cancelOrder}>
                        <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <IngredientsMenu
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    placeOrder={this.placeOrder} />
            </Aux>
        );
    }
}

export default BurgerBuilder;