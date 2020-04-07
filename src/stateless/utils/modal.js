import React from 'react';
import classes from "./modal.module.css";
import Aux from '../../hoc/aux';
import Backdrop from './backdrop';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

const Modal = (props) => {
    // console.log("Show Modal? : ", props.orderNow);
    if (!props.orderNow) { // Why render complex lists when not required?
        // console.log("When Model doesn't render a thing!!..")
        return null; // Returning null to render nothing!!.. 
    }

    return (
        <Aux>
            <Backdrop show={props.orderNow} cancel={props.cancelOrder} />
            <div className={classes.Modal} style={{ ...props.style }}>
                {props.children}
            </div>
        </Aux>
    );
};

Modal.propTypes = {
    orderNow: PropTypes.bool.isRequired,
    cancelOrder: PropTypes.func.isRequired
}

export default Modal;