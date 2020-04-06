import React from 'react';
import classes from "./backdrop.module.css";
import PropTypes from 'prop-types';

const Backdrop = (props) => {
    let content = null;
    if(props.show) {
        content = <div onClick={props.cancel} className={classes.Backdrop}></div>;
    }
    return content;
}

Backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    cancel: PropTypes.func.isRequired
}

export default Backdrop;