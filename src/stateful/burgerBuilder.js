import React, { Component } from 'react';
import Aux from '../hoc/aux';
import Burger from '../stateless/burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0,
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Burger Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;