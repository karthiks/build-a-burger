import React from 'react';
import PropTypes from 'prop-types';
import classes from './burgerIngredient.module.css';

const BurgerIngredient = props => {
    let ingredient = null;
    //if 'this.props.type', passed down by the burger, is equal to the case, then 'ingredient' is equal to the case's JSX
    switch (props.type) {
        case ('bread-bottom'):
          ingredient = <div className={classes.BreadBottom}></div>
          //if break is not stated at the end of each case then the code will not return if switch and case are equal
          break;
        case ('bread-top'):
          ingredient = <div className={classes.BreadTop}></div>
          break;
        case ('meat'):
          ingredient = <div className={classes.Meat}></div>
          break;
        case ('cheese'):
          ingredient = <div className={classes.Cheese}></div>
          break;
        case ('salad'):
          ingredient = <div className={classes.Salad}></div>
          break;
        case ('bacon'):
          ingredient = <div className={classes.Bacon}></div>
          break;
         // default case if nothing is a match
        default:
          ingredient = null;
    }
    return ingredient
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;