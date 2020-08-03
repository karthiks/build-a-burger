import React from 'react';
import classes from "./modal.module.css";
import Aux from '../../hoc/_aux';
import Backdrop from './backdrop';
import PropTypes from 'prop-types';

const Modal = (props) => {
    // console.log("Show Modal? : ", props.orderNow);
    if (!props.visibility) { // Why render complex lists when not required?
        // console.log("When Model doesn't render a thing!!..");
        return null; // Returning null to render nothing!!..
    }

    return (
        <Aux>
            <Backdrop visibility={props.visibility} hide={props.hide} />
            <div className={classes.Modal} style={{ ...props.style }}>
                {props.children}
            </div>
        </Aux>
    );
};

Modal.propTypes = {
    visibility: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired
}

export default Modal;