import React from 'react';
import classes from "./backdrop.module.css";
import PropTypes from 'prop-types';

const Backdrop = (props) => {
    let content = null;
    if (props.visibility) {
        content = <div onClick={props.hide} className={classes.Backdrop}></div>;
    }
    return content;
}

Backdrop.propTypes = {
    visibility: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired
}

export default Backdrop;