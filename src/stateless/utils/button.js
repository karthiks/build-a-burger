import React from 'react';
import classes from './button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
            disabled={props.disabled}
            className={[classes.Button, classes[props.buttonType]].join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

Button.defaultProps ={
    buttonType: "Normal"
}

Button.propTypes = {
    buttonType: PropTypes.oneOf(["Normal", "Success", "Danger"]),
    clicked: PropTypes.func.isRequired
}
export default Button