import React from 'react';
import classes from "./modal.module.css";
import Aux from '../../hoc/aux';
import Backdrop from './backdrop';
import PropTypes from 'prop-types';

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.orderNow} cancel={props.cancelOrder} />
        <div className={classes.Modal} style={{ ...props.style }}>
            {props.children}
        </div>
    </Aux>
);

Modal.propTypes = {
    orderNow: PropTypes.bool.isRequired,
    cancelOrder: PropTypes.func.isRequired
}

export default Modal;