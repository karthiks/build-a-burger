import React, { Component } from 'react';
import Aux from '../hoc/aux';
import Burger from '../stateless/burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 3,
            bacon: 1,
            cheese: 2,
            meat:1,
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