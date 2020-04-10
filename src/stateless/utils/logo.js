import React from 'react';
import PropTypes from 'prop-types';
import burgerLogo from '../../assets/burger-logo.png';
import classes from './logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{ height: props.height, margin: props.margin }}>
            <img src={burgerLogo} alt="burger logo" />
        </div>
    );
}

Logo.propTypes = {
    height: PropTypes.string,
    margin: PropTypes.string
}

export default Logo;