import React from 'react';
import classes from "./backdrop.module.css";
import PropTypes from 'prop-types';

const Backdrop = (props) => {
    console.log(props.show);
    let content = null;
    if(props.show) {
        content = <div onClick={props.cancel} className={classes.Backdrop}></div>;
    }
    console.log(content);
    return content;
}

Backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    cancel: PropTypes.func.isRequired
}

export default Backdrop;