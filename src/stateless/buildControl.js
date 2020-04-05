import React from 'react';
import classes from './buildControl.module.css';

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.addIngredient}>More</button>
            <button className={classes.Less} onClick={props.removeIngredient} disabled={props.isNotYetAdded}>Less</button>
        </div>
    )
}
export default BuildControl;